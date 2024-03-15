// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract StudentProfile {

    struct Student {
        string rollno;
        string name;
        string password;
        string class;
    }

    struct Faculty {
        string userName;
        string name;
        string class;
    }

    mapping (string => Student) public studentMap;
    mapping (string => string[]) public classMap;
    mapping (string => string) public facultyClassMap;
    mapping (string => Faculty) public facultyMap;

    function createStudent(
        string memory _rollno,
        string memory _name,
        string memory _password,
        string memory _class
    ) public {
        studentMap[_rollno] = Student(_rollno, _name, _password, _class);
        classMap[_class].push(_rollno);
    }

    function createFaculty(
        string memory _username,
        string memory _name,
        string memory _class
    ) public {
        facultyMap[_username] = Faculty(_username, _name, _class);
        facultyClassMap[_username] = _class;
    }

    function getStudentDetails(string memory _rollno) public view returns (string memory, string memory, string memory, string memory) {
        Student memory student = studentMap[_rollno];
        return (student.rollno, student.name, student.password, student.class);
    }

    function getFacultyDetails(string memory _username) public view returns (string memory, string memory, string memory) {
        Faculty memory faculty = facultyMap[_username];
        return (faculty.userName, faculty.name, faculty.class);
    }

    function getStudentsInClass(string memory _class) public view returns (string[] memory) {
        return classMap[_class];
    }
}
