
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import { useState } from 'react';
import { ModalPopup } from '../../components/ModalPopup';
import { DeleteModal } from '../../components/DeleteModal';
import { motion } from "framer-motion";



function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>
        </Table.Row>
    )
}


function TaskTable() {
    let [openModal, setOpenModal] = useState(false);
    let [tasks, setTasks] = useState([]);
    let [deletePop, setDeletePop] = useState(false)

    let createHandler = (item) => {
        let updateTasks = [
            ...tasks,
            item,
        ];

        setTasks(updateTasks.reverse());

    }

    let editHandler = (task) => {
        setTasks(tasks.map(item => {
            if (task.id === item.id) {
                return task;
            } else {
                return item;
            }
        }));
    }

    let deleteHandler = (id) => {
        setTasks(tasks.filter(item => {
            return item.id != id;
        }));
    }

    return (
        <div className="mt-3 container mx-auto">
            <motion.div className="flex justify-end w-full"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 1,
                        delay: 0.05,
                    },
                }}>
                <Button onClick={() => setOpenModal(true)} className='mr-2' color="success">Add Task</Button>
                <Button color="failure" onClick={() => setDeletePop(true)}>Clear Tasks</Button>
            </motion.div>
            <motion.div className="p-3 rounded-sm border dark:border-[#666] my-3"
                initial={{
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 1,
                        delay: 0.05,
                    },
                }}>
                <TaskTableHeader />

                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            {tasks.length == 0 ? <NoData /> : tasks.map((item, index) => <TaskItem onDelete={deleteHandler} onEdit={editHandler} data={item} index={index} key={item.id} />)}


                        </Table.Body>
                    </Table>
                </div>
            </motion.div>
            <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
            <DeleteModal arrayPass={() => setTasks([])} onOpen={deletePop} onClose={() => setDeletePop(false)} />
        </div>
    )
}

export default TaskTable