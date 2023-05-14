export const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          lng: -121.2962,
          lat:38.5675
        },
        properties: {
          title: 'Main Studio',
          loc1: '10548 Armstrong Ave',
          loc2: 'Mather, CA 95655',
          description: 'Our main studio is in Mather Field (in the BAPS temple premises). Apart from regular dance classes, this space transforms into a professional stage with perfect lighting and audio systems for all our in-house performances. This also doubles up as a shooting floor for online performances, summer workshops and is used as rehearsal space for big group productions.',
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          lng: -121.2717502,
          lat:38.7478403
          
        },
        properties: {
          title: 'Roseville Studio',
          loc1: '201 Harding Blvd',
          loc2: 'Roseville, CA 95678',
          description: 'At the Roseville location, we have beginners and intermediate classes once a week for students around that area. We have been conducting these classes and catering to art lovers in Roseville for seven years now.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          lng:-121.1339007,
          lat:38.6668742
        },
        properties: {
          title: 'Folsom Studio',
          loc1: '302 S Lexington Dr',
          loc2: 'Folsom, CA 95630',
          description: 'Our Folsom location is used for beginner and intermediate level and 1:1 advanced classes. This is where the SacAdavu meetup happens on the weekend as well. Most recently, Bhajan classes at Kaladhaara use this space once a week. This space is also available for rent to be used by anyone interested to conduct classes when the studio is available. Please reach out to us if you have questions about using this space.'
        }
      },
    ]
  };