import React, { useState } from 'react';
import Web3 from 'web3';
import StudentProfileContract from './StudentProfile.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contractAddress = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'; // Use the actual contract address
const contract = new web3.eth.Contract(StudentProfileContract.abi, contractAddress);

function Profile() {
    const [rollno, setRollno] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [classValue, setClass] = useState('');
    const [username, setUsername] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [facultyClass, setFacultyClass] = useState('');
    const [studentDetails, setStudentDetails] = useState([]);
    const [facultyDetails, setFacultyDetails] = useState([]);

    const handleCreateStudent = async () => {
        await contract.methods.createStudent(rollno, name, password, classValue).send({ from: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8' }); // Use your own address
        setRollno('');
        setName('');
        setPassword('');
        setClass('');
        loadStudentDetails();
    };

    const handleCreateFaculty = async () => {
        await contract.methods.createFaculty(username, facultyName, facultyClass).send({ from: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8' }); // Use your own address
        setUsername('');
        setFacultyName('');
        setFacultyClass('');
        loadFacultyDetails();
    };

    const loadStudentDetails = async () => {
        const studentDetailsResponse = await contract.methods.getStudentDetails(rollno).call();
        setStudentDetails(studentDetailsResponse);
    };

    const loadFacultyDetails = async () => {
        const facultyDetailsResponse = await contract.methods.getFacultyDetails(username).call();
        setFacultyDetails(facultyDetailsResponse);
    };

    return (
        <div>
            <h1>Student Profile</h1>
            <input type="text" placeholder="Roll No" value={rollno} onChange={(e) => setRollno(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Class" value={classValue} onChange={(e) => setClass(e.target.value)} />
            <button onClick={handleCreateStudent}>Create Student</button>

            <h1>Faculty Profile</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Name" value={facultyName} onChange={(e) => setFacultyName(e.target.value)} />
            <input type="text" placeholder="Class" value={facultyClass} onChange={(e) => setFacultyClass(e.target.value)} />
            <button onClick={handleCreateFaculty}>Create Faculty</button>

            <h2>Student Details</h2>
            <pre>{JSON.stringify(studentDetails, null, 2)}</pre>

            <h2>Faculty Details</h2>
            <pre>{JSON.stringify(facultyDetails, null, 2)}</pre>
        </div>
    );
}

export default Profile;
