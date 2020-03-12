const votedornot=document.querySelector(".votedornot");
const form=document.querySelector(".form");
const list=document.querySelector(".voted")
const inputnumber=document.querySelector(".inputnumber");
const verified=document.querySelector(".linktext");
const validation=document.querySelector('.validation');
const buttonnext=document.querySelector('.buttonnext');
var html;

const aadhaarnumbers=(Aadhaarnumber)=>{
	console.log(inputnumber.value)
	if(inputnumber.value==Aadhaarnumber.Aadhaarnumber){
	console.log(Aadhaarnumber.Aadhaarnumber)	
	let html=`<br><br><p class="votedornot" style="color: black;font-weight: bold;background-color: white;width: 450px;font-size: 22px;
	border-radius:5px;text-align: center;transform:translate(0px,-50px);">Aadhaar Number ${inputnumber.value} is already voted</p>`;
	list.innerHTML=html;
}
	else{
		let html=`
		<br><br><p class="votedornot" style="color: black;font-weight: bold;background-color: white;width: 450px;font-size: 22px;
	border-radius:5px;text-align: center">Your Aadhaar Number ${inputnumber.value} is not voted yet</p>
	<br>
	 <input type="checkbox">
  <label for="verifyfingerprint" style="font-size:25px;">Verify Voter's fingerprint</label><br><br>
  <br>
  <input type="checkbox">
  <label for="metamask" style="font-size:25px;">Paste private key in metamask</label><br><br>
  <button style="transform:translate(-25px,100px);padding:10px 30px 10px 30px;"><a href="index.html" style="text-decoration:none;color:white">NEXT</a></button>`;
		
	list.innerHTML=html;
	}
}
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	if(inputnumber.value.length!=12){
		validation.innerText="Enter a valid Aadhaar Number"
	}
	else{
		validation.innerText="";
db.collection("Aadhaarnumbers").get().then((snapshot)=>{
	snapshot.docs.forEach(doc=>{
		aadhaarnumbers(doc.data())
		console.log(doc.data())
	});
}).catch(err=>{
	console.log(err);
});
	}
});

