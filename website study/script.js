// document.addEventListener("DOMContentLoaded", function() {
//     const aboutSection = document.getElementById("about");
//     const images = [
//         "url('typography-es.jpeg')",  // Replace 'image1.jpg' with your actual image file path
//         "url('typographybeach.jpeg')",  // Replace 'image2.jpg' with your actual image file path
//         "url('university-typography.jpeg')"
         
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");
    const images = [
        "url('typography-es.jpeg')",  
        "url('typography-plan.jpeg')",  
        "url('university-typography.jpeg')",  
        "url('typographybeach.jpeg')" 
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        aboutSection.style.backgroundImage = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle back to the first image
    }

    setInterval(changeBackgroundImage, 3000); 
});
        // "myphoto2.jpeg",  // Your initial image
        // "mycommunity1.jpeg", // Replace with your actual image paths
        // "my-photo.jpeg",
        // "myfriend1.jpeg"

    
// Daftar URL gambar
const images = [
    "myphoto2.jpeg", 
    "mycommunity1.jpeg",
    "my-photo.jpeg",
    "myfriend1.jpeg"
];


const imageElement = document.getElementById('dynamic-image');

let currentIndex = 0; // Indeks gambar saat ini

function changeImage() {
    
    imageElement.classList.add('fade-out');
    
    
    setTimeout(() => {
        currentIndex++; 
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }
        imageElement.src = images[currentIndex];

        
        imageElement.classList.remove('fade-out');
    }, 800);
}
setInterval(changeImage, 3000); 



