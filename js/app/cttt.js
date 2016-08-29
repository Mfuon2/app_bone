var vehicle = {
    ajax: function(){

    },
    /*add1: function(){
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    document.getElementById('ajax-content').innerHTML = ajax.responseText;
                }
            }
        }

        ajax.open("GET", "./vehicle/addVehicle.jsp", true);
        ajax.send();
    },
    save:function(){
        var ajax=new XMLHttpRequest();
        var type=document.getElementById();
    },
*/


    cmp: [{
        id: 'vehicle-owner',
        label: 'Owner',
        name: 'owner',
        require:'required',
        placeholder:'Vehicle Owner',
        type: 'text'
    },{
        id: 'vehicle-model',
        label: 'Model',
        name: 'model',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-type',
        label: 'Type',
        name: 'type',
        type: 'select',
        options: [
            {label: 'Saloon', value:'Saloon'},
            {label: 'Sport', value:'Sport'},
            {label: 'Pople Mover', value:'People Mover'},
            {label: 'Compact SUV', value:'Compact Suv'},
            {label: 'Large SUV', value:'Large Suv'},
            {label: 'Lorry and Trellar', value:'Lorry'}
        ],
        required: 'required'
    },{
        id: 'vehicle-make',
        label: 'Make',
        name: 'make',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-price',
        label: 'Price Per Day',
        name: 'price',
        require:'required',
        type: 'number'
    },{
        id: 'vehicle-plate-no',
        label: 'Plate No',
        name: 'plateNumber',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-gear',
        label: 'Gear Type',
        name: 'gearType',
        type: 'select',
        options: [
            {label: 'Automatic', value:'Automatic'},
            {label: 'Manual', value:'Manuel'},
            {label: 'Both Auto and Manual', value:'Auto$Manual'},
        ],
        required: 'required'
    },{
        id: 'vehicle-color',
        label: 'Vehicle Color',
        name: 'color',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-fuel',
        label: 'Fuel Consumption',
        name: 'fuel',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-display',
        label: 'Display',
        name: 'display',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-speakers',
        label: 'Speakers',
        name: 'speakers',
        type: 'text'
    },{
        id: 'vehicle-stability',
        label: 'Stability',
        name: 'stability',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-hillstart',
        label: 'HillStart',
        name: 'hillstart',
        require:'required',
        type: 'text'
    },{
        id: 'vehicle-vPower',
        label: 'vPower',
        name: 'vPower',
        type: 'select',
        options: [
            {label: 'Yes', value:'yes'},
            {label: 'No', value:'no'}
        ],
        required: 'required'
    },{
        id: 'vehicle-category',
        label: 'Category',
        name: 'category',
        type: 'select',
        options: [
            {label: 'Vans', value:'van'},
            {label: 'Automatics', value:'automatic'},
            {label: 'Dream Collection', value:'dreamCollection'},
            {label: 'Green Collection', value:'greenCollection'},
            {label: 'Family Collection', value:'familyCollection'}
        ],
        required: 'required'
    },{
        id: 'vehicle-seats',
        label: 'No of Seats',
        name: 'seats',
        type: 'select',
        options: [
            {label: '2', value:'2'},
            {label: '4', value:'4'},
            {label: '5', value:'5'},
            {label: '7', value:'7'},
            {label: '10', value:'10'},
            {label: '14', value:'14'},
            {label: '22', value:'22'},
            {label: '32', value:'32'},
            {label: '40', value:'64'},
            {label: '64', value:'64'}
        ],
        required: 'required'
    },{
        id: 'vehicle-photo',
        label: 'Photo',
        name: 'photo',
        require:'required',
        type: 'file'
    },{
        id: 'vehicle-comments',
        label: 'Comments',
        name: 'comments',
        placeholder:'vehicle comments',
        require:'required',
        type: 'textarea'
    },{
        id: 'vehicle-id',
        label: '',
        name: 'id',
        type: 'hidden',
        hidden:'true'
    }],


    list: function(){
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                   var resp=ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);


                    for (var i in jsonRecords){
                        var id = jsonRecords[i].id;


                    }

                    var data = "<div class=\"content-panel\">";
                    data+=" <div class=\"adv-table\">";
                    data+="<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"display table table-bordered\" id=\"hidden-table-info\">";
                    data+="<h3 class='text-center danger'>";
                    data+="List of Vehicles "
                    data+="</h3>";
                    data+="<thead>";
                    data+="<tr>";
                    data+="<th>#</th>";
                    data+="<th>Owner</th>";
                    data+="<th>Model</th>";
                    data+="<th>Type</th>";
                    data+="<th>Color</th>";
                    data+="<th>Price Per Day</th>";
                    data+="<th>Fuel Consumption</th>";
                    data+="<th>No Of Seats</th>";
                    data+="<th>Photo</th>";
                    data+="<th class='text-danger'>Actions</th>";
                    data+="</tr>";
                    data+="</thead>";
                    data+="<tbody>";
                    data+="<tr class='text-right'>";
                    data+="<button class=\"btn-success btn-sm \"  type=\"submit\" onclick=\"vehicle.add()\"><span class=\"fa fa-plus\"></span>Add</button>";
                    data+="</tr>";
                    data+="<tr>";

                    for (var i in jsonRecords){


                        var uploadUrl='uploads/';
                        var uploadUrl='uploads/';
                        var id = jsonRecords[i].id;
                        console.log(id);
                        data+="<tr class=\"gradeA\">";
                        data+="<td></td>"
                        data+="<td>"+jsonRecords[i].owner+"</td>";
                        data+="<td>"+jsonRecords[i].model+"</td>";
                        data+="<td>"+jsonRecords[i].type+"</td>";
                        data+="<td>"+jsonRecords[i].color+"</td>";
                        data+="<td>"+jsonRecords[i].price+"</td>";
                        data+="<td>"+jsonRecords[i].fuel+"</td>";
                        data+="<td>"+jsonRecords[i].seats+"</td>";
                        data+="<td> <img src="+uploadUrl + jsonRecords[i].photo+  "  width=\"60px\" ></td>";

                       
                        data+="<td><a class=\"btn btn-sm\" onclick=\"vehicle.viewRecord(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>||<a class=\"btn btn-sm\" onclick=\"vehicle.loadForm()\"><i class=\"fa fa-pencil fa-1x\" aria-hidden=\"true\"></i></a>||<a class=\"btn btn-sm\" onclick=\"vehicle.remove(" +jsonRecords[i].id+  ")\"><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a></td>";




                    }

                    data+="</tr>";

                }

                data+='</tbody>'
                data+='</table>'
                data+=' </div>'
                data+=' </div>';

                document.getElementById('ajax-content').innerHTML = data;


            }
        }


        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    },
    add: function(){
        var me = this;
        var form = '<form class="form-inline form-custom" enctype="multipart/form-data" method="POST" action="./carfileUpload"">';
        form+='<h3 class="\text-center\">Vehicle Registration Form</h3>';
        form+='<div class=\"divider-xs\"></div>';
        form+=' <div class=\"row\">';
        me.cmp.forEach(function(el){

            if (el.type == 'textarea'){
                form +='  <div class=\"col-sm-12 col-md-12\">'
                    +'    <div class=\"form-group"\>'
                    +'    <label>' + el.label + '</label>'
                    + '  <textarea name="' + el.name + '" class=\"form-control\" id="' + el.id + '" rows=\"3\" required="required">'
                    +    '</textarea>'
                    + '   </div>'
                form += '   </div>';


            } else if (el.type == 'select' && el.options) {
                form +='   <div class=\"col-sm-12 col-md-6\">'
                         +'   <div class=\"form-group"\>'
                         +'    <label>'+el.label+'</label>'
                         +'   <select class="form-control customFull" name="' + el.name +   '" id="' + el.id + '">'
                            el.options.forEach(function(opt) {
                            form += '<option value=' + opt.value + '>' + opt.label + '</option>'
                            });
                         form+= '   </select>'
                        form += '   </div>'
                form+= '   </div>';
            }else if (el.type == 'number'){
                form+='<div class=\"col-sm-12 col-md-4\">'
                        +'<div class=\"form-group\">'
                        +'<label>'+el.label+'</label>'
                        +' <input type="'+el.type+'" id="'+el.id+'" class=\"form-control\" name="'+el.name+'" value="" required="required" placeholder="'+el.placeholder+'">'
                        +'</div>'
                form+=' </div>';


            }else if (el.type == 'file'){
                form +=' <div class=\"col-sm-12 col-md-4\">'
                        +'   <div class=\"form-group\">'
                        + '  <label>' + el.label + '</label>'
                        +'  <input type="'+el.type+'"  name="'+el.name+'" id="'+el.id+'" required="required" >'
                        + '  </div>';
                form +='   </div>';


            }else
                form +='  <div class=\"col-sm-12 col-md-6\">'
                     +   '   <div class=\"form-group\">'
                     +'  <label>' + el.label + '</label>'

                     + '  <input type="' + el.type + '" name="' + el.name + '" class="form-control" id="' + el.id + '" required="required">'

                     + '  </div>';
                form+= '  </div>'

        });
        form+='</div>';

        form+=' <div class=\"divider-md hidden-xs\"></div>'
            +'<div class=\"button-submit-wrapper\">'
            +'<button class=\"btn-default btn-lg\"  type="submit"><span class="icon flaticon-uniE024"></span>Save</button>'
            +'</div>';

        form +=  '</form>';





        document.getElementById('ajax-content').innerHTML = form;

    },

    submitForm: true,
    save: function(){
        var me = this;
        var ajax = new XMLHttpRequest();
        me.submitForm = true;

        var params = '';
        me.cmp.forEach(function(el){
            var val = document.getElementById(el.id).value;
            /*if(!val)
                me.submitForm = false;*/

            params += el.name +'=' + encodeURIComponent(val) + '&';


        });
        console.log(params);
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    me.list();
                }
            }
        }

        ajax.open("POST", "./vehicle/action/add", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        if(me.submitForm)
            ajax.send(params);
    },
    remove: function(id){
        var me = this;
        var ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200){
                    me.list();
                }
            }
        }

        ajax.open("DELETE", "./vehicle/delete?id="+id, true);
        ajax.send();
    },
    viewRecord:function (id) {
        var me=this;
        var ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function () {
            if(ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    console.log(resp);
                }
            }

        }
        ajax.open("GET", "./vehicle/load?id="+id, true);
        ajax.send();

    },
    loadCar:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category4 category5" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
            ajax.open("GET", "./vehicle/action", true);
            ajax.send();


        },

    readMore:function (id) {

        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('details-view').innerHTML = response;
                    console.log(response);

                    var jsonRecord = JSON.parse(response);

                    console.log(jsonRecord.model);


                        var uploadUrl = 'uploads/';
                        console.log(id);



                        //var view = '  <div class="details-box"> <span class="box-close">&times;</span>';
                        var view = ' <div class="title">Vehicle Details</div>';
                        view += '<div class="inside">';
                        view += '  <div class="wrapper row-top">';
                        view += "<div class=\"details-image\"> <img src=" + uploadUrl + jsonRecord.photo + " ></div>";
                        view += '  <div class="details-list">';
                        view += "<h4 >" + jsonRecord.model + "</h4>";
                        view += "<p>" + "<b>No of Passengers : </b>" + jsonRecord.seats +" </p>";
                        view += "<p>" + "<b>Transmission Type : </b>" + jsonRecord.gearType +" </p>";
                        view += "<p>" + "<b>Dispay : </b>" + jsonRecord.display +" </p>";
                        view += "<p>" + "<b>Hill Start : </b>" + jsonRecord.hillstart +" </p>";
                        view += ' Speakers: '+jsonRecord.speakers+' </div>';
                        view += ' </div>';
                        view += '<div class="row-bot">';
                        view += ' <p><strong>Please Note:</strong></p>';
                        view += ' <ul class="styled-list">';
                        view += ' <li><strong>Booking Online: </strong>Allows your car to be reserved for you come pick it. In case we delay to reach you back, you can call +254724 573 725</li>';
                        view += '  <li><strong>Providing Details :</strong> Please provide us with your full details</li>';
                        view += ' <li>All vehicles are given in good condition, and we have can aslo provide drivers for requests.</li>';
                        view += ' </ul>';
                        view += ' <a href="#" class="btn btn-default">Save for my reservation</a> </div>';
                        view += ' </div>';
                        view += '</div>';



                }
                document.getElementById('details-view').innerHTML = view;
            }
        }
            ajax.open("GET", "./vehicle/load?id="+id, true);
            ajax.send();

    },
    loadForm:function () {
        var me =this;
        var ajax=new XMLHttpRequest();

        ajax.onreadystatechange=function () {

            if(ajax.readyState==4){
                if(ajax.status==200){
                    var resp=ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    me.form();

                   

                }

            }

        }

    },loadCategoryAutomatic:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category2" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryAutomatic", true);
        ajax.send();


    },
}


function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}


(function init(){
    vehicle.list();
})();
(function init(){
    vehicle.loadCar();
})();