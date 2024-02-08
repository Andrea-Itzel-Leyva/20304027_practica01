const tasksRepository = require("./tasksRepository");

describe("Pruebas", () => {
    // Prueba unitaria: Obtener todas las tareas
    test("Obtener todas las tareas", () => {
        // Arrange
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(Array.isArray(tasks)).toBe(true);
    });

    // Prueba unitaria: Obtener una tarea por su ID
    test("Obtener una tarea por su ID", () => {
        // Arrange
        const taskId = 1;

        // Act 
        const task = tasksRepository.getById(taskId);

        // Assert
        expect(task.title).toBe('Task 1');
        expect(task).not.toBeNull();
    });

    // Prueba unitaria: Crear una nueva tarea
    test("Crear una nueva tarea", () => {
        // Arrange
        const newTaskData = {
            title: 'Nueva tarea',
            description: 'Descripción de la nueva tarea',
            status: 'pendiente'
        };

        // Act
        const createdTask = tasksRepository.create(newTaskData);

        // Assert
        expect(createdTask.title).toBe(newTaskData.title);
        expect(createdTask.description).toBe(newTaskData.description);
        expect(createdTask.status).toBe(newTaskData.status);
    });

    // Prueba unitaria: Editar una tarea existente
    test("Editar una tarea existente", () => {
        // Arrange
        const taskId = 1;
        const updatedTaskData = {
            title: 'Tarea actualizada',
            description: 'Descripción actualizada',
            status: 'en progreso'
        };

        // Act
        const updatedTask = tasksRepository.update(taskId, updatedTaskData);

        // Assert
        expect(updatedTask.id).toBe(taskId);
        expect(updatedTask.title).toBe(updatedTaskData.title);
        expect(updatedTask.description).toBe(updatedTaskData.description);
        expect(updatedTask.status).toBe(updatedTaskData.status);
    });

    // Prueba unitaria: Eliminar una tarea existente
    test("Eliminar una tarea existente", () => {
        // Arrange
        const taskId = 1;

        // Act
        const deletedTask = tasksRepository.delete(taskId);

        // Assert
        expect(deletedTask.id).toBe(taskId);
        expect(tasksRepository.getById(taskId)).toBe(undefined);
    });
});
