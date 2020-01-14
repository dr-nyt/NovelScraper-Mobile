const libraryStorage = window.localStorage;
const _novelName = 0;

function saveNovelToLibrary(novelLink, novelName) {
    libraryStorage.setItem(novelLink, [novelName]);
}

function getNovelFromLibrary(novelLink) {
    let novel = libraryStorage.getItem(novelLink);
    if(novel) {
        return novel.split(',');
    } else {
        return undefined;
    }
}