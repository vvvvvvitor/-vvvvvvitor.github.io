
document.body.onpointermove = () => {
    document.getElementById('about-card').style.transform = 'perspective(0cm) rotateX(40deg)';
};

document.addEventListener('mousemove', (event) => {
    let newX = ((event.clientY/document.body.clientHeight));
    document.getElementById('about-card').style.transform = 'perspective(10cm) rotateX( '+ (((newX - (document.body.clientHeight) / 2)) * 50) + 'deg )';
});


// document.getElementById('about-card').style.backgroundColor='blue';