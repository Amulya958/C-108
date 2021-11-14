function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2iZ-utRfo/model.json' , modelReady) ;
}

function modelReady() 
{
    classifier.classify(gotResults) ; 
}

function gotResults(error , results)
{
 if (error)
 {
     console.error(error);
 }   

else 
{
    console.log(results);
    random_num_R= Math.floor(Math.random() * 255) + 1;
    random_num_G= Math.floor(Math.random() * 255) + 1;
    random_num_B= Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML= 'I can Hear - ' + results[0].label ;
    document.getElementById("result_confidence").innerHTML= 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + " % ";

    document.getElementById("result_label").style.color= "rgb(" + random_num_R + "," + random_num_G + "," + random_num_B + ")" ;
    document.getElementById("result_confidence").style.color= "rgb(" + random_num_R + "," + random_num_G + "," + random_num_B + ")" ;

img= document.getElementById('catty');
img1= document.getElementById('cough');
img2= document.getElementById('dog');
img3= document.getElementById('lion');

if (results[0].label == "BARKING")
{
    img.src= 'catty.jfif';
    img1.src= 'cough are babys.jfif';
    img2.src= 'dog is cute.gif';
    img3.src= 'lion are dangerous💢💢💢.jfif';
}

else if (results[0].label == "Mewoing")
{
    img.src= 'catty.gif';
    img1.src= 'cough are babys.jfif';
    img2.src= 'dog is cute.jfif';
    img3.src= 'lion are dangerous💢💢💢.jfif';   
}

else if (results[0].label == "MOOING")
{
    img.src= 'catty.jfif';
    img1.src= 'cough are babys.gif';
    img2.src= 'dog is cute.jfif';
    img3.src= 'lion are dangerous💢💢💢.jfif';   
}

else if (results[0].label == "Background Noie")
{;}


else
{
    img.src= 'catty.jfif';
    img1.src= 'cough are babys.jfif';
    img2.src= 'dog is cute.jfif';
    img3.src= 'lion are dangerous💢💢💢.gif';   
}
}
}