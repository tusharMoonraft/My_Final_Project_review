/*eslint-disable*/
export const displayMap=(locs)=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoidHVzaGFyc2luZ2g1MjY4IiwiYSI6ImNrbnU4cDF3NjBhZ3gyb2t0cXFhamc5MmoifQ.nKy2-YWKEwF3DZakQoA76g';
var map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/tusharsingh5268/cknua17150q3217n4lcxj9qmu',
    scrollZoom:false
});
const bounds=new mapboxgl.LngLatBounds();
locs.forEach(loc=>{
    //Create marker
    const el=document.createElement('div');
    el.className='marker';
    //Add marker
    new mapboxgl.Marker({
        element:el,
        anchor:'bottom'
    }).setLngLat(loc.coordinates).addTo(map);
    // Add popup
    new mapboxgl.Popup({
        offset:30
    }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}:${loc.description}</p>`).addTo(map);

// Extend  map bounds to include current location
    bounds.extend(loc.coordinates)
});

map.fitBounds(bounds,{
    padding:{
        top:200,
        bottom:150,
        left:100,
        right:100
    }
});

}


