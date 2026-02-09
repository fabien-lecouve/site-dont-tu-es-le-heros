//IMPORT
import { fetchJSONData, setStorage, clearStorage, element} from "../utils/index.js";


// FUNCTIONS
async function displayLibrary() {
    const library = document.getElementById('library');
    library.innerHTML = '';
    window.scrollTo(0, 0);
    clearStorage();
    
    const stories = await fetchJSONData('./json/library.json');

    stories.forEach(story => {
        let a = element('a', {href: 'story.html', class: 'menu__link'});
        const h3 = element('h3', {}, story.title);
        const img = element('img', {src: `images/le-petit-chaperon-rouge/${story.slug}.png`});

        a.append(h3, img);

        a.addEventListener('click', () => selectStory(story.slug))
        library.append(a);
    });
}

function selectStory(slug) {
    setStorage("storySlug", slug);
}


// CODE
displayLibrary();