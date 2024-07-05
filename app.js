const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "collagedata-70deb.firebaseapp.com",
    databaseURL: "https://collagedata-70deb-default-rtdb.firebaseio.com",
    projectId: "collagedata-70deb",
    storageBucket: "collagedata-70deb.appspot.com",
    messagingSenderId: "47353393683",
    appId: "1:47353393683:web:4e63405aa7722a46e6c5e6"
};

firebase.initializeApp(firebaseConfig);

document.getElementById("studentForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var pinNo = document.getElementById("pinNo").value;
    var name = document.getElementById("name").value;
    var branch = document.getElementById("branch").value;
    var fathersName = document.getElementById("fathersName").value;
    var occupation = document.getElementById("occupation").value;
    var studentNo = document.getElementById("studentNo").value;
    var fatherNo = document.getElementById("fatherNo").value;
    var mailId = document.getElementById("mailId").value;
    var aadharNo = document.getElementById("aadharNo").value;
    var panNo = document.getElementById("panNo").value;
    var address = document.getElementById("address").value;
    var homeTown = document.getElementById("homeTown").value;
    var pinCode = document.getElementById("pinCode").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var xthCgpa = document.getElementById("xthCgpa").value;
    var xthYearOfPassing = document.getElementById("xthYearOfPassing").value;
    var xthBoard = document.getElementById("xthBoard").value;
    var xthSchoolName = document.getElementById("xthSchoolName").value;
    var educationType = document.getElementById("educationType").value;
    var interCgpa = document.getElementById("interCgpa").value;
    var interYearOfPassing = document.getElementById("interYearOfPassing").value;
    var interBoard = document.getElementById("interBoard").value;
    var interCollegeName = document.getElementById("interCollegeName").value;
    var diplomaCgpa = document.getElementById("diplomaCgpa").value;
    var diplomaYearOfPassing = document.getElementById("diplomaYearOfPassing").value;
    var diplomaBoard = document.getElementById("diplomaBoard").value;
    var diplomaCollegeName = document.getElementById("diplomaCollegeName").value;
    var thirdYearCgpa = document.getElementById("thirdYearCgpa").value;
    var backlogs = document.getElementById("backlogs").value;

    var regulars_db = firebase.database().ref("Regulars_Submissions/" + pinNo);
    var laterals_db = firebase.database().ref("Laterals_Submissions/" + pinNo);

    var newSubmission;

    if (educationType === "inter") {
        newSubmission = regulars_db.push();
        newSubmission.set({
            PinNo: pinNo,
            Name: name,
            Branch: branch,
            FathersName: fathersName,
            Occupation: occupation,
            StudentNo: studentNo,
            FatherNo: fatherNo,
            MailId: mailId,
            AadharNo: aadharNo,
            PanNo: panNo,
            Address: address,
            HomeTown: homeTown,
            PinCode: pinCode,
            Gender: gender,
            DOB: dob,
            XthCgpa: xthCgpa,
            XthYearOfPassing: xthYearOfPassing,
            XthBoard: xthBoard,
            XthSchoolName: xthSchoolName,
            EducationType: educationType,
            InterCgpa: interCgpa,
            InterYearOfPassing: interYearOfPassing,
            InterBoard: interBoard,
            InterCollegeName: interCollegeName,
            ThirdYearCgpa: thirdYearCgpa,
            Backlogs: backlogs
        }, handleSubmissionResult);
    } else if (educationType === "diploma") {
        newSubmission = laterals_db.push();
        newSubmission.set({
            PinNo: pinNo,
            Name: name,
            Branch: branch,
            FathersName: fathersName,
            Occupation: occupation,
            StudentNo: studentNo,
            FatherNo: fatherNo,
            MailId: mailId,
            AadharNo: aadharNo,
            PanNo: panNo,
            Address: address,
            HomeTown: homeTown,
            PinCode: pinCode,
            Gender: gender,
            DOB: dob,
            XthCgpa: xthCgpa,
            XthYearOfPassing: xthYearOfPassing,
            XthBoard: xthBoard,
            XthSchoolName: xthSchoolName,
            EducationType: educationType,
            DiplomaCgpa: diplomaCgpa,
            DiplomaYearOfPassing: diplomaYearOfPassing,
            DiplomaBoard: diplomaBoard,
            DiplomaCollegeName: diplomaCollegeName,
            ThirdYearCgpa: thirdYearCgpa,
            Backlogs: backlogs
        }, handleSubmissionResult);
    }
}

function handleSubmissionResult(error) {
    if (error) {
        alert("Error occurred: " + error.message);
    } else {
        alert("Submission successful!");
    }
}
