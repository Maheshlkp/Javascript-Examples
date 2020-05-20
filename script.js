var greetings="";  //number
            var Math=2;
            var Eng=4;

            //Conditional statements
            if(Eng<Math){
                greetings="I got good score Math";
            }else if(Math===Eng){
                greetings="I got good score in English"
            }else{
                greetings="Hurray, I got good score in En"

            }

            //Switch Statements
            switch(new Date().getDay()){
                case 0:
                greetings="I am sunday";
                break;
                case 1:
                greetings="I am Monday";
                break;
                case 2:
                greetings="I am Tuesday";
                break;
                case 3:
                greetings="I am Wedday";
                break;
                case 4:
                greetings="I am Thursday";
                break;
                case 5:
                greetings="I am Fridday";
                break;
                case 6:
                greetings="I am satday";
                break;
                default:
                greetings="I am out of the box";
                break;
            }


            //for Loop and for in

            var cities=["AP","Telangana","Mharastra","karnataka","Tamilnadu","Kerala"]

            for(i=0;i<cities.length;i++){
                greetings+=cities[i]+"<br>";
            }
            //for in Loop

            var i;
            for(i in cities){
                greetings+=cities[i]+"<br>";
            }

            //while loop
            var i=0;
            while(i<9){
                greetings += "<br> The number is" +i;
                i++;
            }

            //do while
            var i=0;
            do{
                greetings += "<br> The number is" +i;
                i++;
            }
            while(i<6);


            //break and continue
            var i;
            for(i=0;i<5;i++){
                if(i==2){continue;}
                greetings+="<br> Your score is "+i;
            }

            document.getElementById("test").innerHTML = greetings;


            //functions

            function MultiFunc(n1,n2,n3){
                return n1*n2*n3;
            }
            document.getElementById("test").innerHTML=MultiFunc(2,4,6);

            //Objects

            var myDetails={
                firstName:"Mahesh",
                lastName:"Lakkapally",
                height:"5.6",
                weight: "68kgs",
                fullName: function(){
                    return this.firstName+"-"+ this.lastName;
                }
            }

            // document.getElementById("test").innerHTML=myDetails.fullName();


            //binding functions to event

            function showDate(){
                document.getElementById("test").innerHTML=Date();
            }






        