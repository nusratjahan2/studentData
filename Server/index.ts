import { StudentDataSource } from "./server";
import { Student } from "./entities/student"


StudentDataSource.initialize().then(async () => {
    console.log("Inserting a new student into the database...");
    const studentRepository = StudentDataSource.getRepository(Student);

    const newStudent = new Student();
    newStudent.name = "John Doe";
    newStudent.department = "Computer Science";

    await studentRepository.save(newStudent);
    console.log("Student saved with ID:", newStudent.id);

    console.log("Retrieving all students...");
    const students = await studentRepository.find();
    console.log("Loaded students:", students);

}).catch(error => console.log(error));