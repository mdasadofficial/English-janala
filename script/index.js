const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Promise of Response
        .then((res) => res.json()) // promise of json data
        .then((json) => displayLesson(json.data));
};
const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`;  // console.log(id);
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data));
};
const displayLevelWord = (words) => {
    // 1. get the container & empty
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";
    // 2. get into every lesson

    // {
    //     "id": 101,
    //         "level": 2,
    //             "word": "Market",
    //                 "meaning": "বাজার",
    //                     "pronunciation": "মার্কেট"
    // }
    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `  
       <div class="bg-white rounded-xl shadow-sm text-center py-15 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning / Pronunciations</p>
            <div class="font-bangle text-2xl font-medium">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF25] hover:bg-sky-500"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF25] hover:bg-sky-500"><i class="fa-solid fa-volume-high"></i></i></button>
            </div>

    `;
        wordContainer.append(card);
    });
    //     3. create Element
    //     4. append into container
};
const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    // 2. get into every lesson
    for (let lesson of lessons) {

        //     3. create Element
        // console.log(lesson)
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `  
       <button onClick="loadLevelWord(${lesson.level_no})" class=" btn btn-outline btn-primary">
       <i class="fa-solid fa-book-open"></i>
                                Lesson ${lesson.level_no} 
        </button>
    `;
        //     4. append into container
        levelContainer.append(btnDiv);
    }

};


loadLessons();

