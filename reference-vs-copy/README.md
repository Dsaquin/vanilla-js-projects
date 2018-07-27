# # Practicing Copying and Referencing Arrays and Objects

# TIL:

#### 1. Ways to COPY an Array:

- slice();
- [].concat(_array_);
- [...*array*]; - spread
- Array.from(_array_);

#### 2. Ways to COPY an Object

- Object.assign({}, _object_, {_properties you want to add/overwrite_});
- **This only goes 1 level deep. Meaning, an object within an object is a reference, not a copy**
