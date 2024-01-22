document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    const nestedNavigItems = document.querySelectorAll('.boty');

    body.addEventListener('click', function(e) {
    // //    if (e.target.classList.contains('bar')){
    // //     sideMenu.classList.add('toggle-on')
    // //     sideMenu.classList.remove('toggle-off');
    // //     overlay.style.display = 'block';
    //    } else 
       if(e.target.classList.contains('canceled')){
        sideMenu.classList.remove('toggle-on')
        sideMenu.classList.add('toggle-off');
        overlay.style.display = 'none';
    // //    } else if (e.target.classList.contains('side-menu')){
    // //     sideMenu.classList.add('toggle-on')
    // //     sideMenu.classList.remove('toggle-off');
    // //     overlay.style.display = 'block';
    // //    } else if (e.target.classList.contains('menu-list')){
    // //     sideMenu.classList.add('toggle-on')
    // //     sideMenu.classList.remove('toggle-off');
    // //     overlay.style.display = 'block';
    // //    } else {
    // //     sideMenu.classList.remove('toggle-on')
    // //     sideMenu.classList.add('toggle-off');
    // //     overlay.style.display = 'none';
    // //    }
    // if(e.classList.contains('.cancel')){
    //     sideMenu.classList.remove('toggle-on')
    //     sideMenu.classList.add('toggle-off');
    //      overlay.style.display = 'none';
    // }
       }
      
    });

    hamburger.addEventListener('click', function(e){
        if (e.target.classList.contains('bar')){
                sideMenu.classList.add('toggle-on');
                sideMenu.classList.remove('toggle-off');
                overlay.style.display = 'block';
                console.log(e.target)
        } else if (e.target.classList.contains('nav-link')){
            window.location.href = e.target.href;
            console.log(e.target.href);
        }
      });

    function displayRandomVideoAds(){
       let videoAds = document.querySelector('blockquote');

       var randomVideo = [
        {videoId : '7325767208024427781', cite: 'https://www.tiktok.com/@nerdstore.online/video/7325767208024427781'},
        {videoId : '7326860264123534597', cite: 'https://www.tiktok.com/@nerdstore.online/video/7326860264123534597'},
        {videoId : '7325757719837723909', cite: 'https://www.tiktok.com/@nerdstore.online/video/7325757719837723909'},
        {videoId : '7325396379487014149', cite: 'https://www.tiktok.com/@nerdstore.online/video/7325396379487014149'},
        {videoId : '7326859683342437637', cite: 'https://www.tiktok.com/@nerdstore.online/video/7326859683342437637'},
        {videoId : '7325757719837723909', cite: 'https://www.tiktok.com/@nerdstore.online/video/7325757719837723909'}
       ];
       let randomVideoIndex = randomVideo[Math.floor(Math.random() * randomVideo.length)];

       videoAds.setAttribute('data-video-id', randomVideoIndex.videoId);
       videoAds.setAttribute('cite', randomVideoIndex.cite);

    };
    displayRandomVideoAds();

    function displayrandomAds(){
        let location = document.querySelector('.location');
        let numberOfFollowers = document.querySelector('.amount-fllw');
        var randomLocation = [
           'Abuja, NIGERIA',
           'Acrra, GHANA',
           'Ohio, USA',
           'London, UK',
           'Bangladesh, INDIA',
        ];

        var randomAmount = [
        '50',
        '100',
        '1,000',
        '10,000',
        '15,000',
        '20,000',
        '25,000'
        ];

        let randomIndexLoc = Math.floor(Math.random()* randomLocation.length);
        let randomIndexNum =  Math.floor(Math.random()* randomAmount.length);

        let randomLoc = randomLocation[randomIndexLoc];
        let randomNum = randomAmount[randomIndexNum];

        location.innerHTML = randomLoc;
        numberOfFollowers.innerHTML = randomNum;
    }

    displayrandomAds();
    setInterval(displayrandomAds, 1000)

    // Dropdown toggle in FAQ section
    const questions = document.querySelectorAll('.q');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            this.classList.toggle('open');
            const answer = this.querySelector('.answer');
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });

    const navItem = document.querySelectorAll('.list-item');
       navItem.forEach(function(nav){
        nav.addEventListener('click', function(e){
            e.preventDefault();
            function toggleNestedNavig() {
                const nestedNavig = this.querySelector('.nested-navig');
                nestedNavig.style.display = 'block';
              }
          
              nestedNavigItems.forEach(item => {
                item.addEventListener('click', toggleNestedNavig);
              });
        })
       })

    // Close ads buttons
    const adCancelButtons = document.querySelectorAll('.ad-cancel');

    adCancelButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const adContainer = this.closest('.ads-one') || this.closest('.ads-two');
            adContainer.style.display = 'none';
        });
    });

    const form = document.querySelector('#form');
    const submit = document.querySelector('.submit');
    const input = document.querySelectorAll('input');
    const result = document.querySelector('.result-head');
    form.addEventListener('click', function(e){
        if(e.target.classList.contains('submit')){
            input.forEach(function(inputed){
                inputed.disabled = true;
                function redirectToAnotherPage() {
                    // Add a delay of 5 seconds (5000 milliseconds)
                    setTimeout(function() {
                      // Replace 'your-target-url' with the actual URL you want to redirect to
                      window.location.href = 'https://app.skweezer.net/register';
                    }, 1000);
                  }
                result.innerHTML = 'Your request is processing';
                submit.value = 'Processing...'
            })
        }
    })
  
    
});
