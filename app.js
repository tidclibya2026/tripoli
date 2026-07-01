const map = L.map('map', {scrollWheelZoom:false}).setView([32.8975, 13.1766], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '&copy; OpenStreetMap' }).addTo(map);
const goldIcon = L.divIcon({className:'custom-pin',html:'<div style="width:18px;height:18px;background:#C89B3C;border:3px solid #fff;border-radius:50%;box-shadow:0 4px 16px rgba(0,0,0,.3)"></div>',iconSize:[22,22],iconAnchor:[11,11]});
fetch('assets/old_city.geojson').then(r=>r.json()).then(data=>{
  const layer = L.geoJSON(data,{pointToLayer:(f,latlng)=>L.marker(latlng,{icon:goldIcon}),style:{color:'#9E4F2F',weight:3,opacity:.85},onEachFeature:(feature,layer)=>{
    const p=feature.properties||{}; layer.bindPopup(`<div dir="rtl" style="font-family:Tajawal,Arial;min-width:190px"><b>${p.name||'معلم من طرابلس القديمة'}</b><br><span>${p.description||'نقطة ضمن خريطة اكتشاف طرابلس: تاريخ، موروث، خدمات، أو حياة يومية.'}</span></div>`)
  }}).addTo(map);
  try { map.fitBounds(layer.getBounds(), {padding:[24,24]}); } catch(e) {}
});
