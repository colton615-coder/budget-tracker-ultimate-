function getData(key){return JSON.parse(localStorage.getItem(key)||"[]");}
function saveData(k,d){localStorage.setItem(k,JSON.stringify(d));}

function renderDashboard(){}
function renderIncome(){}
function renderExpenses(){}
function renderBudgets(){}
function renderReports(){ new Chart(document.getElementById("pieChart"), {type:"pie",data:{labels:["Food","Bills"],datasets:[{data:[200,400]}]}}); }
function renderCalendar(){}
function renderInsights(){
  document.getElementById("insightsList").innerHTML=`<p>Top Category: Food</p><p>Burn Rate: 9 days</p>`;
  new Chart(document.getElementById("barChart"),{type:"bar",data:{labels:["Food","Bills"],datasets:[{data:[200,400]}]}});
  new Chart(document.getElementById("lineChart"),{type:"line",data:{labels:["Week1","Week2"],datasets:[{data:[300,500]}]}});
}