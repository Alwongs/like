export default {
    getters: {
        excursions(state) {
            return state.excursions;
        },
        tracking(state) {
            return state.tracking;
        },
    },
    state: {
        excursions: [
            { id: 1, img: 'excursions/gallery_1.jpg' },
            { id: 2, img: 'excursions/gallery_2.jpg' },
            { id: 3, img: 'excursions/gallery_3.jpg' },
            { id: 4, img: 'excursions/gallery_4.jpg' },          
            { id: 5, img: 'excursions/gallery_5.jpg' },          
        ],
        tracking: [
            { id: 1, img: 'tracking/gallery_1.jpg' },
            { id: 2, img: 'tracking/gallery_2.jpg' },
            { id: 3, img: 'tracking/gallery_3.jpg' },
            { id: 4, img: 'tracking/gallery_4.jpg' },          
            { id: 5, img: 'tracking/gallery_5.jpg' },          
        ],
    }
}