var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_peta_1 = new ol.format.GeoJSON();
var features_peta_1 = format_peta_1.readFeatures(json_peta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_peta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peta_1.addFeatures(features_peta_1);
var lyr_peta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_peta_1, 
                style: style_peta_1,
                popuplayertitle: 'peta',
                interactive: true,
                title: '<img src="styles/legend/peta_1.png" /> peta'
            });
var format_Perumahan_2 = new ol.format.GeoJSON();
var features_Perumahan_2 = format_Perumahan_2.readFeatures(json_Perumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perumahan_2.addFeatures(features_Perumahan_2);
var lyr_Perumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perumahan_2, 
                style: style_Perumahan_2,
                popuplayertitle: 'Perumahan',
                interactive: true,
    title: 'Perumahan<br />\
    <img src="styles/legend/Perumahan_2_0.png" /> 24<br />\
    <img src="styles/legend/Perumahan_2_1.png" /> 32<br />\
    <img src="styles/legend/Perumahan_2_2.png" /> 36<br />\
    <img src="styles/legend/Perumahan_2_3.png" /> 42<br />\
    <img src="styles/legend/Perumahan_2_4.png" /> 45<br />\
    <img src="styles/legend/Perumahan_2_5.png" /> 54<br />\
    <img src="styles/legend/Perumahan_2_6.png" /> 60<br />'
        });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: 'jalan',
                interactive: true,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_3_0.png" /> Jalan Utama<br />\
    <img src="styles/legend/jalan_3_1.png" /> Jalan Penghubung<br />'
        });
var format_fasilitas_4 = new ol.format.GeoJSON();
var features_fasilitas_4 = format_fasilitas_4.readFeatures(json_fasilitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_4.addFeatures(features_fasilitas_4);
var lyr_fasilitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_4, 
                style: style_fasilitas_4,
                popuplayertitle: 'fasilitas',
                interactive: true,
    title: 'fasilitas<br />\
    <img src="styles/legend/fasilitas_4_0.png" /> masjid<br />\
    <img src="styles/legend/fasilitas_4_1.png" /> Pos Satpam<br />\
    <img src="styles/legend/fasilitas_4_2.png" /> SuperMarket<br />\
    <img src="styles/legend/fasilitas_4_3.png" /> Taman<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_peta_1.setVisible(true);lyr_Perumahan_2.setVisible(true);lyr_jalan_3.setVisible(true);lyr_fasilitas_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_peta_1,lyr_Perumahan_2,lyr_jalan_3,lyr_fasilitas_4];
lyr_peta_1.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_Perumahan_2.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', 'luas': 'luas', 'type': 'type', 'status': 'status', });
lyr_jalan_3.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', });
lyr_fasilitas_4.set('fieldAliases', {'id': 'id', 'keterangan': 'keterangan', 'luas': 'luas', 'fungsi': 'fungsi', });
lyr_peta_1.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_Perumahan_2.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', 'luas': 'TextEdit', 'type': 'Range', 'status': 'TextEdit', });
lyr_jalan_3.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_fasilitas_4.set('fieldImages', {'id': 'TextEdit', 'keterangan': 'TextEdit', 'luas': 'TextEdit', 'fungsi': 'TextEdit', });
lyr_peta_1.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - always visible', });
lyr_Perumahan_2.set('fieldLabels', {'id': 'no label', 'keterangan': 'no label', 'luas': 'no label', 'type': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_jalan_3.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - always visible', });
lyr_fasilitas_4.set('fieldLabels', {'id': 'no label', 'keterangan': 'inline label - always visible', 'luas': 'no label', 'fungsi': 'no label', });
lyr_fasilitas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});