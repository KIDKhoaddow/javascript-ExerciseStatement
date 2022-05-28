let arrPicture = [];
arrPicture[0] = ["Picture/part1-1.jpg", "Picture/Part1.jpg"]
arrPicture[1] = ["Picture/part2-1.jpg", "Picture/Part2.jpg"]
arrPicture[2] = ["Picture/part3-1.jpg", "Picture/Part3.jpg"]
arrPicture[3] = ["Picture/part4-1.jpg", "Picture/Part4.jpg"]
arrPicture[4] = ["Picture/part5-1.jpg", "Picture/Part5.jpg"]
arrPicture[5] = ["Picture/part6-1.jpg", "Picture/Part6.jpg"]
arrPicture[6] = ["Picture/part7-1.jpg", "Picture/Part7.jpg"]
arrPicture[7] = ["Picture/part8-1.jpg", "Picture/Part8.jpg"]
arrPicture[8] = ["Picture/part9-1.jpg", "Picture/Part9.jpg"]


function changePicture(x) {
    let slotx="slot"+toString(x);
  document.getElementById(slotx).src=arrPicture[x-1][0];

}