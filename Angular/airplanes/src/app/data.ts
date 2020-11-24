export class Airplanes {
    public data = JSON.parse(`{
        "from": [
          {
            "name": "Seattle",
            "to": {
              "Los Angeles": { "name": "Los Angeles", "price": 200 },
        "Houston": { "name": "Houston", "price": 239 },
              "St. Louis": { "name": "St. Louis", "price": 178 }
            }
          },
          {
            "name": "Los Angeles",
            "to": [
              { "name": "Seattle", "price": 200 },
        { "name": "Houston", "price": 211 },
        { "name": "St. Louis", "price": 148 }
            ]
          },
          {
            "name": "St. Louis",
            "to": [
        { "name": "Seattle", "price": 199 },
              { "name": "Los Angeles", "price": 219 },
        { "name": "New York", "price": 215 },
        { "name": "Houston", "price": 201 },
        { "name": "Tampa", "price": 298 }
            ]
          },
          {
            "name": "Houston",
            "to": [
        { "name": "Seattle", "price": 197 },
              { "name": "Los Angeles", "price": 215 },
        { "name": "New York", "price": 220 },
        { "name": "St. Louis", "price": 211 },
        { "name": "Tampa", "price": 310 }
            ]
          },
          {
            "name": "New York",
            "to": [
        { "name": "Houston", "price": 208 },
        { "name": "St. Louis", "price": 178 },
        { "name": "Tampa", "price": 240 }
            ]
          },
          {
            "name": "Tampa",
            "to": [
        { "name": "New York", "price": 200 },
        { "name": "St. Louis", "price": 199 },
        { "name": "Houston", "price": 250 }
            ] 
          }
        ]
      }`);
}