package uk.org.project.userdao;

import uk.org.project.entity.UserEntity;

import java.util.List;

public interface UserDAO {
    public List<UserEntity> getAllUsers();

}
