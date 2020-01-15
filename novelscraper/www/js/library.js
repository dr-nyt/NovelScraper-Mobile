// Library Storage System
const libraryStorage = window.localStorage;

// Library Array Index
const _novelName = 0;
const _latestChapterName = 1;
const _novelCoverSrc = 2;
const _totalChapters = 3;
const _source = 4;
const _downloadStatus = 5;
const _downloaded = 6;


// Save the novel data to the library system with novel-link as unique ID and the remaining parameters as values
function saveNovelToLibrary(novelLink, novelName, latestChapterName, novelCoverSrc, totalChapters, source, downloadStatus, downloaded) {
    // libraryStorage.setItem(uniqueID, value);
    libraryStorage.setItem(novelLink, [novelName, latestChapterName, novelCoverSrc, totalChapters, source, downloadStatus, downloaded]);
}

// Returns an array of novel data
function getNovelFromLibrary(novelLink) {
    // libraryStorage.getItem(uniqueID);
    let novel = libraryStorage.getItem(novelLink);
    if(novel) {
        return novel.split(',');    // We get the array stored in string format and split it back into an array.
    } else {
        return undefined;
    }
}