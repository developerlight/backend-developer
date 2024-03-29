function getLastSegment(data) {
    return data.substring(data.lastIndexOf('/') + 1);
}

module.exports = getLastSegment;