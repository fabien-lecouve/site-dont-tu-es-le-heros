// IMPORT
import { fetchJSONData, setStorage, getStorage, element } from "../utils/index.js";


//// CONSTANTES ////
const title = document.getElementById('title');


//// FUNCTIONS ////
const currentStory = await fetchJSONData(`./json/stories/${getStorage("storySlug")}.json`);

function displayStory(id) {

    displayTitle(currentStory);

    displayPage(id);
}

function displayTitle(story) {
       title.innerText = story.title;
}

function displayPage(id) {
    const contentStory = document.getElementById('content-story');
    contentStory.innerHTML = '';
    window.scrollTo(0, 0);
    
    const page = currentStory.pages.find((element) => element.id === id);

    const pageContent = createPageContent(page);

    const pageChoices = createPageChoices(page);

    contentStory.append(pageContent, pageChoices);
}

function createPageContent(page) {
    const div = element('div', {class: 'page__content'});

    page.content.forEach(el => {
        const p = element('p', {}, el.text);

        div.append(p);

        if (el.img) {
            const img = element('img', {src: `../images/Le petit chaperon rouge/${el.img}.png`});
            div.append(img);
        }
    })

    if (page.tool) {
        setStorage("tool", page.tool);
    }

    return div;
}

function createPageChoices(page) {
    const div = element('div', {class: 'choices'});

    page.choices.forEach(el => {
        if (!el.tool || (el.tool && el.tool === getStorage('tool'))) {
            let btn;

            if (el.lastPage) {
                btn = element('a', {class: 'choices__button', href: 'index.html'}, el.action);
            } else {
                btn = element('button', {class: 'choices__button'}, el.action);
            }
            
            btn.addEventListener('click', () => displayPage(el.id))

            div.append(btn);
        }
    });

    return div;
}


//// CODE ////
displayStory(102);