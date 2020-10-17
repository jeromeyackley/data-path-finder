# data-path-finder
This library allows for traversing a javascript object to find particular properties specified in a data-path string.

A data-path string provides the ability to specify an object-traversal mechanism to grab specific attribute values out of the provided object.

# Data Path specification
A data-path string conforms to a simple specification of a property tree.

Consider the following javascript object:
```
{
  userName:"Jose",
  address: "San Pablo de Heredia",
  favoriteCars: [ 
    {
      make:"Nissan",
      model:"versa"
    },
    {
      make:"Toyota",
      model:"Rav4"
    },
    {
      make:"Hyundai",
      model:"Santa Fe"
    }
  ]
}
```

The data-path specification `"userName"` points to the value "Jose", while the data-path specification `"favoriteCars[].make"` point to the value `["Nissan","Toyota","Hyundai"]`

# Uses of this library
Known uses for data-path expressions implemented in this library include data transformation, mapping and verification out of dynamic rules specified in text. For example for comparing two objects of different structure that may have common attributes.

