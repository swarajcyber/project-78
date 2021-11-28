var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =["C:\Users\aneet\OneDrive\Desktop\cruise\IMG_4786.JPG","C:\Users\aneet\OneDrive\Desktop\cruise\IMG_4400.JPG","C:\Users\aneet\OneDrive\Desktop\cruise\IMG_4409.JPG","C:\Users\aneet\OneDrive\Desktop\cruise\IMG_4406.JPG","C:\Users\aneet\OneDrive\Desktop\cruise\IMG_4629.JPG"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["SHANKARAO PATIL","MAHESH PATIL","SARANSH PATIL","ANITA PATIL","MINA PATIL"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
