package com.Backend.Portfolio.repository;

import com.Backend.Portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Custom query methods can be added here if needed
}

