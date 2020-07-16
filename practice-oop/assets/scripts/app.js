class ToolTip{
  constructor(text){
    this.element = document.createElement("p");
    this.element.className = "card";
    this.element.setAttribute("id", "tooltip")
    this.element.innerHTML = text;
  }

  toggleToolTip(tooltipProject){
    if(ToolTip.removeToolTip() === tooltipProject.element) return;
    this.element.style.display = "absolute";
    
    console.log(tooltipProject);

    const infoButton = tooltipProject.infoButton;

    console.log(tooltipProject.infoButton)

    const moreInfoPosition = [infoButton.offsetTop, infoButton.offsetLeft];
    const scrollTop = tooltipProject.element.parentElement.scrollTop;

    const x = moreInfoPosition[1] + "px";
    const y = moreInfoPosition[0] + 25 - scrollTop + "px";

    this.element.style.position = "absolute";
    this.element.style.left = x;
    this.element.style.top = y;

    console.log(x, y);

    tooltipProject.element.insertAdjacentElement("beforeend", this.element);

  }
  
  static removeToolTip(){
    let tooltipEl = document.querySelector("#tooltip");
    if(tooltipEl){
      let tooltipParentElement = tooltipEl.parentElement;
      tooltipEl.remove();
      return tooltipParentElement;
    }
    return false;
  }
}

class ProjectItem {
  get title() {
    return this.element.querySelector("h2").textContent;
  }

  get desc() {
    return this.element.querySelector("p").textContent;
  }

  get extraInfo() {
    return this.element.dataset.extraInfo;
  }

  get infoButton() {
    return this.element.querySelector(".alt");
  }

  get finishButton() {
    return this.element.querySelectorAll("button")[1];
  }

  get id() {
    return this.element.getAttribute("id");
  }

  get finish() {
    return this.finishButton.textContent === "Finish";
  }

  set finish(isFinish) {
    return (this.finishButton.innerHTML = isFinish ? "Activate" : "Finish");
  }

  constructor(element) {
    this.element = element;
    this.tooltip = new ToolTip(this.extraInfo);
    this.finishButton.addEventListener("click", this.toggleFinish.bind(this));
    this.infoButton.addEventListener("click", this.tooltip.toggleToolTip.bind(this.tooltip, this));
  }

  toggleFinish() {
    const currentCondition = this.finish ? 0 : 1;
    const currentID = this.id;
    for (let i = 0; i < projects[currentCondition].length; i++) {
      if (projects[currentCondition][i].id === currentID) {
        projects[currentCondition].splice(i, 1);
        break;
      }
    }
    projects[currentCondition ^ 1].push(this);
    this.element.remove();
    projectsLi[currentCondition ^ 1].append(this.element);
    ToolTip.removeToolTip();
    this.finish = !currentCondition;
    this.element.scrollIntoView({ behavior: "smooth" });
  }

}

function startAnalytics() {
  const analyticsEl = document.createElement("script");
  analyticsEl.src = "assets/scripts/analytics.js";
  analyticsEl.defer = true;
  document.head.append(analyticsEl);
}

function parseProjects(projectSection) {
  const projectSectionUL = projectSection.querySelectorAll(".card");
  result = [];
  for (const projectItem of projectSectionUL) {
    const currentProject = new ProjectItem(projectItem);
    result.push(currentProject);
  }
  return result;
}

const projectsLi = [
  document.querySelector("#active-projects ul"),
  document.querySelector("#finished-projects ul"),
];

const tooltipTemplate = document.getElementById("tooltip-template");
const tooltipBody = document.importNode(tooltipTemplate.content, true);

tooltipBody.querySelector("p").text = "tes";
document.body.append(tooltipBody)

const projects = [parseProjects(projectsLi[0]), parseProjects(projectsLi[1])];

const timeoutID = setTimeout(startAnalytics, 3000);

const buttonEl = document.getElementById("stop-analytics-btn");

buttonEl.addEventListener("click", () => {
  clearTimeout(timeoutID);
  console.log(timeoutID + " has bean cleared")
})