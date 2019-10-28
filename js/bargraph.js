let labels = []
let bars = {}
let graphWrapper
let colors = ['#E67701', '#D84C6F', '#794AEF', '#1291D0']
let lightColors = ['#FFECE2', '#FFE9EC', '#F1F0FF', '#E2F5FF']
async function setupBarGraph(modelURL) {
    // the metatadata json file contains the text labels of your model and additional information
    const metadataURL = `${modelURL}metadata.json`
    // get the names of the labels from the metadata of the model
    const response = await fetch(metadataURL)
    const json = await response.json()
    labels = json.labels
    graphWrapper = document.getElementById('graph-wrapper')
    labels.forEach((label, index) => makeBar(label, index))
}

function makeBar(label, index) {
    //make our elements
    let barWrapper = document.createElement('div')
    let barEl = document.createElement('progress')
    let percentEl = document.createElement('span')
    let labelEl = document.createElement('span')
    labelEl.innerText = label

    //assemble the elements
    barWrapper.appendChild(labelEl)
    barWrapper.appendChild(barEl)
    barWrapper.appendChild(percentEl)
    let graphWrapper = document.getElementById('graph-wrapper')
    graphWrapper.appendChild(barWrapper)

    //style the elements
    let color = colors[index]
    let lightColor = lightColors[index]
    barWrapper.style.color = color
    barWrapper.style.setProperty('--color', color)
    barWrapper.style.setProperty('--color-light', lightColor)

    //save references to each element
    bars[label] = {
        bar: barEl,
        percent: percentEl
    }
}

function updateBarGraph(data) {
    for (let datum of data) {
        let barEls = bars[datum.className]
        let barEl = barEls.bar
        let percentEl = barEls.percent
        barEl.value = datum.probability
        percentEl.innerText = convertToPercent(datum.probability)
    }
}

function convertToPercent(num) {
    num *= 100
    num = Math.round(num)
    return `${num}%`
}
