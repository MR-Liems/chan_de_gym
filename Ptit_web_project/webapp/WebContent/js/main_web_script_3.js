(function() {
    const imageWrapper = document.getElementById('teacherin4-imageWrapper');
    const prevBtn = document.getElementById('teacherin4-prevBtn');
    const nextBtn = document.getElementById('teacherin4-nextBtn');
    const totalProfiles = 20;
    let currentIndex = 0;
    
    // Mảng chứa thông tin cho mỗi profile
    const profileData = [
    {
    name: "Trịnh Trần Phương Tuấn",
    image: "https://th.bing.com/th/id/OIP.QofCnHzdIt9xj8iI7d9GWwHaKv?w=127&h=184&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    description: "IELTS 8.0 <br> Speaking 7.5 <br> Writing 8.0 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Nam Hai Pham",
    image: "https://scontent.fhan20-1.fna.fbcdn.net/v/t1.6435-9/122088408_3727885153889600_5088405742962694613_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=SVPUWVScaIwQ7kNvgG0pnYd&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB43zBQwOJdPFY2UqDmKdzHbVBt3AmSUP3BLJK4HPH-Bw&oe=671505C0",
    description: "IELTS 7.5 <br> Speaking 7.5 <br> Writing 7.0 <br> Reading 8.0 <br> Listening 7.5"
    },
    {
    name: "Alex Nguyen",
    image: "https://cdn1.ratemds.com/media/doctors/doctor/image/doctor-alexander-nguyen-family-gp.jpg",
    description: "IELTS 8.5 <br> Speaking 8.0 <br> Writing 8.5 <br> Reading 9.0 <br> Listening 8.5"
    },
    {
    name: "Bino Vu",
    image: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/355033096_578129044502049_4327307146790893016_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JRw-_6xhvJ8Q7kNvgHpWdIG&_nc_ht=scontent.fhan2-5.fna&oh=00_AYDEo436LgMZUl89VPUdJ8YCRjlVzUH_AasFI7i6SjuQoA&oe=66F3839D",
    description: "IELTS 7.5 <br> Speaking 7.5 <br> Writing 7.0 <br> Reading 8.0 <br> Listening 7.5"
    },
    {
    name: "Dang Tran Tung",
    image: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/5083273/645760_199282.jpeg",
    description: "IELTS 9.0 <br> Speaking 9.0 <br> Writing 9.0 <br> Reading 8.5 <br> Listening 9.0"
    },
    {
    name: "Andrew Nguyen",
    image: "https://static.wikia.nocookie.net/the-heather-holm/images/9/98/Andrew_Nguyen.jpeg/revision/latest?cb=20230822054502",
    description: "IELTS 8.5 <br> Speaking 8.0 <br> Writing 8.5 <br> Reading 9.0 <br> Listening 8.5"
    },
    {
    name: "Lisa Tran",
    image: "https://thethaovanhoa.mediacdn.vn/372676912336973824/2024/9/20/lisa-victoria1-17268024026201314681148.jpg",
    description: "IELTS 8.0 <br> Speaking 7.5 <br> Writing 7.5 <br> Reading 8.5 <br> Listening 8.5"
    },
    {
    name: "Michael Pham",
    image: "https://rollingstoneindia.com/wp-content/uploads/2022/08/Shreya-Lenka_.jpg",
    description: "IELTS 7.5 <br> Speaking 7.5 <br> Writing 7.0 <br> Reading 8.0 <br> Listening 7.5"
    },
    {
    name: "Daniel Vu",
    image: "https://eye.hms.harvard.edu/sites/projects.iq.harvard.edu/files/eye/files/vu_daniel_220x220_.jpg?m=1665776074",
    description: "IELTS 8.0 <br> Speaking 8.0 <br> Writing 7.5 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Emily Le",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRufnmnHNckou8SdeGJ3jdBbMc2GpfcAbZW-w&s",
    description: "IELTS 8.5 <br> Speaking 8.0 <br> Writing 8.5 <br> Reading 9.0 <br> Listening 8.5"
    },
    {
    name: "Đức Huy",
    image: "path/to/image11.jpg",
    description: "IELTS 7.5 <br> Speaking 7.0 <br> Writing 7.5 <br> Reading 8.0 <br> Listening 7.5"
    },
    {
    name: "Khánh Ngọc",
    image: "path/to/image12.jpg",
    description: "IELTS 8.0 <br> Speaking 8.0 <br> Writing 7.5 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Linh Chi",
    image: "path/to/image13.jpg",
    description: "IELTS 8.5 <br> Speaking 8.5 <br> Writing 8.0 <br> Reading 9.0 <br> Listening 8.5"
    },
    {
    name: "Hà My",
    image: "path/to/image14.jpg",
    description: "IELTS 8.0 <br> Speaking 7.5 <br> Writing 8.0 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Thanh Hằng",
    image: "path/to/image15.jpg",
    description: "IELTS 8.0 <br> Speaking 7.5 <br> Writing 7.5 <br> Reading 8.5 <br> Listening 8.5"
    },
    {
    name: "Phúc Thịnh",
    image: "path/to/image16.jpg",
    description: "IELTS 8.0 <br> Speaking 7.5 <br> Writing 8.0 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Thu Thảo",
    image: "path/to/image17.jpg",
    description: "IELTS 7.5 <br> Speaking 7.0 <br> Writing 7.5 <br> Reading 8.0 <br> Listening 7.5"
    },
    {
    name: "Văn Tú",
    image: "path/to/image18.jpg",
    description: "IELTS 8.5 <br> Speaking 8.0 <br> Writing 8.5 <br> Reading 9.0 <br> Listening 8.5"
    },
    {
    name: "Mai Phương",
    image: "path/to/image19.jpg",
    description: "IELTS 8.0 <br> Speaking 8.0 <br> Writing 7.5 <br> Reading 8.5 <br> Listening 8.0"
    },
    {
    name: "Trọng Nhân",
    image: "path/to/image20.jpg",
    description: "IELTS 8.5 <br> Speaking 8.5 <br> Writing 8.0 <br> Reading 9.0 <br> Listening 8.5"
    }
    ];
    
    // Tạo 20 flip card profiles
    for (let i = 0; i < totalProfiles; i++) {
    const profile = profileData[i] || { name: `Profile ${i+1}`, image: "", description: `Profile ${i+1}. IELTS 8.0, Speaking 7.5, Writing 7.0, Reading 8.5, Listening 9.0` };
    
    const flipCard = document.createElement('div');
    flipCard.className = 'teacherin4-flip-card';
    flipCard.innerHTML = `
    <div class="teacherin4-flip-card-inner">
        <div class="teacherin4-flip-card-front">
            <div class="teacherin4-profile-image">
                ${profile.image ? `<img src="${profile.image}" alt="${profile.name}">` : `
                <svg viewBox="0 0 122.88 122.88" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" class="teacherin4-pfp"><g><path d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95 c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0 c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05 c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5 l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74 c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52 c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13 c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01 c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0 c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7 c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14 c6.87-9.22,10.93-20.65,10.93-33.03c0-15.29-6.2-29.14-16.22-39.15c-10-10.03-23.85-16.23-39.14-16.23 c-15.29,0-29.14,6.2-39.15,16.22C12.27,32.3,6.07,46.15,6.07,61.44C6.07,73.82,10.13,85.25,16.99,94.47L16.99,94.47L16.99,94.47z"></path></g></svg>
                `}
            </div>
            <div class="teacherin4-name">
                ${profile.name}
            </div>
        </div>
        <div class="teacherin4-flip-card-back">
            <p class="teacherin4-description">
                ${profile.description}
            </p>
            <div class="teacherin4-socialbar">
                <a id="teacherin4-github" href="#"><svg viewBox="0 0 16 16" class="bi bi-github" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg></a>
                <a id="teacherin4-instagram" href="#"><svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg></a>
                <a id="teacherin4-facebook" href="#"><svg viewBox="0 0 16 16" class="bi bi-facebook" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg></a>
                <a id="teacherin4-twitter" href="#"><svg viewBox="0 0 16 16" class="bi bi-twitter" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.3 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                </svg></a>
            </div>
        </div>
    </div>
    `;
    imageWrapper.appendChild(flipCard);
    }
    
    function updateGallery() {
    imageWrapper.style.transform = `translateX(${-currentIndex * 132.5}px)`;
    }
    
    function nextImage() {
    currentIndex = (currentIndex + 1) % (totalProfiles - 3);
    updateGallery();
    }
    
    function prevImage() {
    currentIndex = (currentIndex - 1 + totalProfiles - 3) % (totalProfiles - 3);
    updateGallery();
    }
    
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
    
    // Hiển thị 4 profile đầu tiên
    updateGallery();
    })();