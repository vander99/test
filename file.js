const oppoStatus = [
    {
      "K_OPPO_STATUS": 1,
      "STATUS": "1. Initial Contact",
      "SUCCESS": 0
    },
    {
      "K_OPPO_STATUS": 2,
      "STATUS": "2. Demonstration",
      "SUCCESS": 25
    },
    {
      "K_OPPO_STATUS": 3,
      "STATUS": "3. Proposal",
      "SUCCESS": 50
    },
    {
      "K_OPPO_STATUS": 4,
      "STATUS": "4. Negotiation",
      "SUCCESS": 75
    },
    {
      "K_OPPO_STATUS": 5,
      "STATUS": "5. Order",
      "SUCCESS": 100
    }
  ];
  
  const Module = class {
    constructor() {
  
    }
    start() {
        var selectFiller = document.querySelector("select");
        var inputFiller = document.querySelector("input");
        var submitButton = document.querySelector("button");
        var divFiller = document.querySelector("div");

        for (var i = 0; i<oppoStatus.length; i++){

            var data = oppoStatus[i];
            var status = data.STATUS;

            var selectOption = document.createElement("option");
            selectOption.value = i+1;
            selectOption.text = status;
            console.log(status)

            selectFiller.add(selectOption,null);
        }

        selectFiller.onclick = function() {
          var inputValue = oppoStatus[selectFiller.selectedIndex].SUCCESS;
          inputFiller.value = inputValue;
        }

        submitButton.onclick = function () {
          var jsonData = {};
          jsonData["status"] = oppoStatus[selectFiller.selectedIndex].STATUS;
          jsonData["sucess"] = oppoStatus[selectFiller.selectedIndex].SUCCESS;
          
          divFiller.innerHTML = JSON.stringify(jsonData);
        }

    }
  }
  
  const main = new Module();
  main.start();
  