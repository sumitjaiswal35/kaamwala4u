const address = {
  'state': ['Uttar Pradesh', 'Karnataka'],
  'Uttar Pradesh': {
    city: ['Noida', 'Varanasi'],
    'Noida': {
      area: ['Sector 45', 'Sector 137'],
      'Sector 45': {
        'apartment': ['Amrapali Saphire', 'NRI Residency']
      },
      'Sector 137': {
        'apartment': ['Paras Tiera', 'Ajnara Daffodil', 'Gulshan Vivante', 'Paramount Floraville',
          'Exotica Fresco', 'Purvanchal Royal Park', 'Supertech Ecocoti']
      }
    },
    'Varanasi': {
      area: ['Sector 46', 'Sector 13'],
      'Sector 46': {
        'apartment': ['Amrapali Saphire 1', 'NRI Residency 1']
      },
      'Sector 13': {
        'apartment': ['Paras Tiera 1', 'Ajnara Daffodil 1', 'Gulshan Vivante 1', 'Paramount Floraville 1',
          'Exotica Fresco 1', 'Purvanchal Royal Park 1', 'Supertech Ecocoti 1']
      }
    }
  },
  'Karnataka': {
    city: ['Banglore', 'Manglore'],
    'Banglore': {
      'area': ['A-1', 'A-2'],
      'A-1': {
        'apartment': ['apart-1', 'apart-2']
      },
      'A-2': {
        'apartment': ['apart-3', 'apart-4']
      }
    },
    'Manglore': {
      'area': ['A-11', 'A-21'],
      'A-11': {
        'apartment': ['apart-11', 'apart-21']
      },
      'A-21': {
        'apartment': ['apart-31', 'apart-41']
      }
    }
  }
}

export default address;