interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(currentProfile: Profile, updates: Partial<Profile>): Profile {
    return { ...currentProfile, ...updates };   //  spread operator is used to merge `currentProfile` with `updates`, i mean ,to update something like age or anything
  }