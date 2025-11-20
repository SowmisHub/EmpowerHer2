const profile={name:"Charlie",age:29,address:{city:"San Franciso", Zipcode:"94101"}};
const updates={age:30,address:{Zipcode:"94109",country:"USA"}};
const updatedProfile={...profile,
    ...updates,
    address:{...profile.address,...updates.address}
}
console.log(updatedProfile);