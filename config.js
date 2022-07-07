var config = {
    style: 'mapbox://styles/lpmnews/cl4zy0m4c001u15qui1recxph',
    accessToken: 'pk.eyJ1IjoibHBtbmV3cyIsImEiOiJjbDNrNThvbngwMTh4M2RreTZscGg4NmRxIn0.PY6VA64HoHWornJEJpf8Ng',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Louisville Pizza Map',
    subtitle: 'You asked for the best pizza in town. We delivered.',
    byline: 'Reporting by Stephanie Wolfe, digital tools by Justin Hicks.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Our Story Begins Here',
            image: 'https://miro.medium.com/max/1400/1*txrJZnGHvDlVybyy_pFdKw.jpeg',
            description: 'Cavemen are typically portrayed as wearing shaggy animal hides, and capable of cave painting like behaviorally modern humans of the last glacial period. They are often shown armed with rocks, cattle bone clubs, or sticks with rocks tied to them, and are portrayed as unintelligent and aggressive. Popular culture also frequently represents cavemen as living with or alongside dinosaurs, even though non-avian dinosaurs became extinct at the end of the Cretaceous period, 66 million years before the emergence of the Homo sapiens species. The era that most people think of when they talk about "cavemen" is the Paleolithic Era, sometimes referred to as the Stone Age (though actually the Paleolithic is but one part of the Stone Age). This era extends from more than 2 million years into the past until sometime between 40,000 and 10,000 years ago.',
            location: {
                center: [-85.7595116771294, 38.25365104821839],
                zoom: 13,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pizza Donisi',
            address: 'Right next to Mag Bar', 
            image: './path/to/image/source.png',
            description: 'The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.[4] Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.[5] It has become one of the most popular foods in the world and a common fast food item in Europe, North America and Australasia; available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, via pizza delivery, and as street food.[5] Various food companies sell ready-baked pizzas, which may be frozen, in grocery stores, to be reheated in a home oven. In 2017, the world pizza market was US$128 billion, and in the US it was $44 billion spread over 76, 000 pizzerias.[6] Overall, 13% of the U.S.population aged 2 years and over consumed pizza on any given day.',
            location: {
                center: [-85.75816326784475, 38.22895054918607],
                zoom: 20,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
