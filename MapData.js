const Images = [
    { image: require('./assets/images/aha.jpeg') },
    { image: require('./assets/images/weaves-hair.jpeg') },
    { image: require('./assets/images/nema.jpeg') },
    { image: require('./assets/images/black-lamour.jpeg') },
    { image: require('./assets/images/joana.jpeg') },
    { image: require('./assets/images/classy.jpeg') },
    { image: require('./assets/images/fola.jpeg') },
    { image: require('./assets/images/dreadlock.png') },
    { image: require('./assets/images/eurafro.jpeg') },
    { image: require('./assets/images/k-hair.png') },
];

export const markers = [
    {
        coordinate: {
            latitude: 50.82723473094775,
            longitude: -0.14209177974715267,
        },
        title: 'Afro Hair Academy',
        decription: 'Barber shop in Brighton, England',
        location: '50 Queens Rd, Brighton, BN1 3XB',
        image: Images[0].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.825618527087954,
            longitude: -0.15664655211905334,
        },
        title: 'Weaves Hair Extension Brighton',
        decription: 'Hair salon in Hove, England',
        location: '125 Western Rd, Hove, BN3 1DB',
        image: Images[1].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.83388578481384,
            longitude: -0.1398318794315843,
        },
        title: 'Nema Hair Salon',
        decription: 'Hair salon in Brighton, England',
        location: '45 New England Rd, Brighton BN1 4GG',
        image: Images[2].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.83298737718553,
            longitude: -0.1289757086535551,
        },
        title: 'Black L\'amour Barbers',
        decription: 'Barber shop in Brighton, England',
        location: '17a Lewes Rd, East Sussex, Brighton BN2 3HP',
        image: Images[3].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.773381470695355,
            longitude: 0.2954447056504354,
        },
        title: 'Joana Mendes Beauty Salon Afro Caribbean Specialists',
        decription: 'Hairdresser in Eastbourne, England',
        location: '150 Seaside, Eastbourne BN22 7QW',
        image: Images[4].image,
        rating: 5
    },
    {
        coordinate: {
            latitude: 51.448380,
            longitude: 0.012850,
        },
        title: 'Classy Design Afro Hair Salon',
        decription: 'Hair salon in London, England',
        location: '39A Burnt Ash Hill, London SE12 0AE',
        image: Images[5].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 51.541290,
            longitude: 0.001880,
        },
        title: 'StylesbyFola',
        decription: 'Hair salon in London, England',
        location: '74 Broadway, London E15 1NG',
        image: Images[6].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.768380,
            longitude: 0.291480,
        },
        title: 'Eurafro World',
        decription: 'Beauty salon in Eastbourne, England',
        location: '85 Seaside Rd, Eastbourne BN21 3PL',
        image: Images[8].image,
        rating: 4
    },
    {
        coordinate: {
            latitude: 50.823980,
            longitude: -0.145070,
        },
        title: 'K\'s Hair and Beauty Salon',
        decription: 'Hair salon in Brighton, England',
        location: '16 Imperial Arcade, Brighton BN1 3EA',
        image: Images[9].image,
        rating: 3
    },
];

export const mapStyle = [
    {
        'elementType': 'labels.icon',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
];