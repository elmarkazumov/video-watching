let video;

function getVideo(url){
    let link = url.split('');

    let id_video = [''];

    for(let i = 32; i < link.length; i++){
        id_video.push(link[i]);
    }

    id_video = id_video.join('');

    video_link = 'https://www.youtube.com/embed/' + id_video;

    if(document.querySelectorAll('iframe').length == 0){
        video = document.createElement('iframe');
        video.setAttribute("width", "1280");
        video.setAttribute("height", "720");
        video.setAttribute("src", video_link);
        document.querySelector(".main__window").append(video);
    } else{
        video.setAttribute("src", video_link);
    }
}

document.querySelector('#main_btn').onclick = function(){
    getVideo(document.querySelector("#main_txt").value);
};
