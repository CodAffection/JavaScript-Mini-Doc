const storeKey = {
    SELECTED_CATEGORY: 'selectedCategory',
    SELECTED_TOPIC: 'selectedTopic',
    TOPIC_SUMMARY: 'topicSummary',
}

const basicFiles = [
    '0. Practice.js',
    '1. What is JavaScript',
    '2. First JavaScript Program.js',
    '3. Variables and Declaration.js',
    '4. let,var and const.js',
    '5. Datatype.js',
    '6. Operators.js',
    '7. Operator Precedence.js',
    '8. String.js',
    '9. control flow.js',
    '10. Function.js',
    '11. Object.js',
    '12. Array.js',
    '13. Loops and iteration.js',
    '12. Array Methods.js',
    '13. Array Methods 2.js',
    '14. Array Iteration.js',
    '16. Object Methods.js',
]

const categoryGroup = document.getElementById('categoryGroup');
categoryGroup.addEventListener("change", handleGroupChange);
function handleGroupChange(event) {
    const { value } = event.target;
    localStorage.setItem(storeKey.SELECTED_CATEGORY, value);
    localStorage.setItem(storeKey.SELECTED_TOPIC, '0. Practice.js');
    localStorage.setItem(storeKey.TOPIC_SUMMARY, '');
    location.reload();
}

const topicSelect = document.getElementById('topics');
topicSelect.addEventListener("change", handleTopicChange);
function handleTopicChange(event) {
    localStorage.setItem(storeKey.SELECTED_TOPIC, event.target.value);
    localStorage.setItem(storeKey.TOPIC_SUMMARY, '');
    location.reload();
}

window.addEventListener('load', event => {
    configureDefaultStore();
    populateGroupAndTopics();
    loadScriptFromLocalStorage();
});
function configureDefaultStore() {
    if (!localStorage.getItem(storeKey.SELECTED_CATEGORY))
        localStorage.setItem(storeKey.SELECTED_CATEGORY, 'Practice');
    if (!localStorage.getItem(storeKey.SELECTED_TOPIC))
        localStorage.setItem(storeKey.SELECTED_TOPIC, '0. Practice');
    if (!localStorage.getItem(storeKey.TOPIC_SUMMARY))
        localStorage.setItem(storeKey.TOPIC_SUMMARY, '');
}
function populateGroupAndTopics() {
    topicSelect.innerText = null;
    let selectedCategory = localStorage.getItem(storeKey.SELECTED_CATEGORY),
        selectedTopic = localStorage.getItem(storeKey.SELECTED_TOPIC),
        listOfOptions;
    document.getElementsByName('category')
        .forEach((el, i) => {
            if (el.value == selectedCategory)
                el.checked = true;
        })
    switch (selectedCategory) {
        case 'Practice':
            listOfOptions = [];
            break;

        case '1. Basics':
            listOfOptions = basicFiles;
            break;

        case '3. Array':
            listOfOptions = arrayFiles;
            break;

        default:
            break;
    }
    if (listOfOptions.length == 0)
        document.getElementById('topicFieldset').style.visibility = 'hidden';
    else {
        listOfOptions.forEach(el => {
            topicSelect.innerHTML += getTopicOption(el);
        })
        topicSelect.value = selectedTopic;
    }
}

function getTopicOption(topic) {
    return `<option value="${topic}">${topic}</option>`;
}
function loadScriptFromLocalStorage() {
    let scriptURL;
    if (localStorage.getItem(storeKey.SELECTED_CATEGORY) == "Practice")
        scriptURL = '0. Common Practice.js';
    else
        scriptURL = `./${localStorage.getItem(storeKey.SELECTED_CATEGORY)}/${localStorage.getItem('selectedTopic')}`
    let scriptEl = document.createElement('script')
    scriptEl.type = 'text/javascript';
    scriptEl.src = scriptURL;
    scriptEl.async = true;
    document.body.appendChild(scriptEl);
    scriptEl.addEventListener('load', () => { loadTopicSummary() });
}

function loadTopicSummary() {
    let topicSummary = localStorage.getItem('topicSummary');
    if (topicSummary) {
        document.getElementById("topicSummary").innerHTML = topicSummary.split('-').join('<br />- ');

    }
}
