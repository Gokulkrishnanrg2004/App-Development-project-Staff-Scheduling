package com.example.demo.service;

import com.example.demo.model.UserProfile;
import com.example.demo.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public List<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

    public Optional<UserProfile> getUserProfileById(Long id) {
        return userProfileRepository.findById(id);
    }

    public UserProfile createUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    public void deleteUserProfile(Long id) {
        userProfileRepository.deleteById(id);
    }

    public UserProfile updateUserProfile(Long id, UserProfile userProfileDetails) {
        UserProfile userProfile = userProfileRepository.findById(id).orElseThrow(() -> new RuntimeException("UserProfile not found"));
        
        userProfile.setFirstName(userProfileDetails.getFirstName());
        userProfile.setLastName(userProfileDetails.getLastName());
        userProfile.setDomain(userProfileDetails.getDomain());
        
        return userProfileRepository.save(userProfile);
    }
}
