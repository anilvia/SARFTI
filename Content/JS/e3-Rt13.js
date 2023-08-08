function notification_perm(){var currentPermission;
    Notification.requestPermission( function(result) { currentPermission = result  } );}
    
          const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        const days = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
    const d = new Date();
    let month = months[d.getMonth()];
    let day = days[d.getDate()];
    console.log(month);
    console.log(day);
    document.getElementById("date-m").innerHTML = month;
    document.getElementById("date-n").innerHTML = day;
    document.addEventListener('DOMContentLoaded', function () {
      var modeSwitch = document.querySelector('.mode-switch');
    
      modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
      });
      
      var listView = document.querySelector('.list-view');
      var gridView = document.querySelector('.grid-view');
      var projectsList = document.querySelector('.project-boxes');
      
      listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectsList.classList.remove('jsGridView');
        projectsList.classList.add('jsListView');
      });
      
      gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectsList.classList.remove('jsListView');
        projectsList.classList.add('jsGridView');
      });
      
      document.querySelector('.messages-btn').addEventListener('click', function () {
        document.querySelector('.messages-section').classList.add('show');
      });
      
      document.querySelector('.messages-close').addEventListener('click', function() {
        document.querySelector('.messages-section').classList.remove('show');
      });
    });


    // Код для развёртывания задачи к паре (Желтый блок со стрелкой в конце строки пары)
    let paraImportant = document.body.querySelector(".para__important");
    let paraImportantSvg = document.body.querySelector(".para__important > svg");
    let paraImportantToggleClass = document.body.querySelector(".para__important");
    let paraMainExtended = document.body.querySelector(".para__main-extended");
    let paraImportantDescription = document.body.querySelector(".Int_buttons");
    let paraTwoTestGridWrapper = document.body.querySelector(".para2__test-grid_wrapper");
    let paraTaskExtendedWrapper = document.body.querySelector(".para__task-extended");
    let paraTaskExtended = document.body.querySelector(".para__task-extended > p");

    // Работает на 70% (я запутався, доделаю).


    function paraExtention () {
      paraMainExtended.classList.toggle("extended");
      paraImportant.classList.toggle("extended");

      if (paraMainExtended.classList.contains("extended") || paraImportant.classList.contains("extended")) {
            paraMainExtended.style.height = 200 + "px";
            paraMainExtended.style.alignItems = "center";
            paraImportant.style.height = 100 + "%";
            paraImportant.style.alignItems = "center";
            paraImportantSvg.style.rotate = "180deg";
            
            paraTwoTestGridWrapper.style.paddingBottom = 100 + "px";
            paraTwoTestGridWrapper.style.paddingBottom = 100 + "px";

            paraTaskExtended.style.display = "flex";
            paraTaskExtended.style.paddingTop = "80px";

            paraTaskExtendedWrapper.style.display = "grid";
            paraTaskExtendedWrapper.style.position = "relative";
            paraTaskExtendedWrapper.style.alignSelf = "flex-end";
            
      } else {
            paraMainExtended.style.height = "";
            paraImportant.style.height = "";
            paraImportant.style.alignItems = "";
            paraImportantSvg.style.rotate = "360deg";
            paraTwoTestGridWrapper.style.paddingBottom = "";
            paraTaskExtended.style.display = "";
            paraTaskExtendedWrapper.style.display = "";
      }

      //document.body.querySelector(".Int_buttons").classList.toggle("extended");
      // document.body.querySelector(".Int_buttons").style.display = "grid";

        // if (paraImportantToggleClass.contains("extended")) {
        //   paraMainExtended.style.height = 200 + "px";
        //   document.body.querySelector(".Int_buttons").style = "display: grid; max-height: 200px";
        //}

    }
    paraImportant.addEventListener("click", paraExtention)
    console.log(paraImportant);