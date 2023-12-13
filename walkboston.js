function spaceDummyLine() {
  const spaceDummyLineFill = document.createElement("ul");
  const spaceLine = "";
  spaceDummyLineFill.id = "Space dummy line";
  spaceDummyLineFill.innerHTML = spaceLine;  
  container.appendChild(spaceDummyLineFill);  
}

function formatCurrency(price) {
  // let formattedNumber = number.toLocaleString('en-US', { style: 'currency', currency: 'USD'});
  // let price = 1000000;
  let formattedNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 달러 기호를 추가하여 반환
  return `$${formattedNumber}`;
}

function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  let above200000 = '';
  var topFivePay = '';
  let arrTopFive = [];
  let numberValue = 0;
  let stringValue = '';


  for (let i = 0; i < len; i++) {  // Actual mode
  // for (let i = 0; i < 10; i++) {     // test mode
    html +=
      '<li class="post">' + "<h2>" + people[i][8] + "</h2>" + "<h3>"  + formatCurrency(people[i][11]) + "</h3>" + "</li>";

    //--------------------------------------------------------------------------------
    // Above $200,000 payroll list
    //--------------------------------------------------------------------------------
    if (people[i][11] >= 100000) {
      above200000 += 
      '<li class="post">' + "<h2>" + people[i][8] + "</h2>" + "<h3>" + formatCurrency(people[i][11]) + "</h3>" + "</li>";
    }
    // --------------------------------------------------------------------------------    
    // Top five payroll list
    // --------------------------------------------------------------------------------
      stringValue = people[i][8];
      numberValue = people[i][11];
      arrTopFive.push( { string: stringValue, separator: "/", number: numberValue } );    
      // if (i===90) {
      //   '<li class="post">' + "<h2>" + people[i][8] + "</h2>" + "<h3>" + formatCurrency(people[i][11]) + "</h3>" + "</li>";

      // }
  }
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert HTML tags
  // arrTopFive.sort((a, b) => a - b);
  arrTopFive.sort(function(a, b) {
    return b.number - a.number;
  });

  // let tempStr = ['',''];
  let topFivePayPeople = '';
  for (let j = 0; j < 5; j++) {    
      // let [a, b] = arrTopFive[j].split('/');
      topFivePayPeople += 
      '<li class="post">' + "<h2>" + arrTopFive[j].string + "</h2>" + "<h3>" + formatCurrency(arrTopFive[j].number) + "</h3>" + "</li>";
    }  

  const subTitle0 = '<li>' + "<h1>" + "Boston Employee's Top Five Payroll list" + "</h1>" + "</li>";
  const topFivePayroll = document.createElement("ul");
  topFivePayroll.id = "Top Five payroll";
  topFivePayroll.innerHTML = subTitle0 + topFivePayPeople;
  container.appendChild(topFivePayroll);   

  spaceDummyLine();  


  const subTitle1 = '<li class="post">' + "<h1>" + "Above $100,000 Payroll list" + "</h1>" + "</li>";
  const above200000Container = document.createElement("ul");
  above200000Container.id = "above 100000 Payroll list";
  above200000Container.innerHTML = subTitle1 + above200000;
  container.appendChild(above200000Container); 

  spaceDummyLine();  

  const subTitle2 = '<li class="post">' + "<h1>" + "Boston Employees Payroll list" + "</h1>" + "</li>";
  const dataContainer = document.createElement("ul");
  dataContainer.id = "data";
  dataContainer.innerHTML = subTitle2 + html;
  container.appendChild(dataContainer);

}
//  renderPosts(boston, document.getElementById('container'));
