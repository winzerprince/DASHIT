const Mission = require('../models/Mission');

const createMission = async (req, res)=>{
    try {
        const { name, description, launch_date, status } = req.body;
        const newMission = await Mission.create({ name, description, launch_date, status });
        res.status(200).json(newMission)

        
    }
    catch (err) {
        console.error('Error:', err),
        res.status(500).json({message:'Error creating  a mission '})
    }
}

const getMissions = async (req, res) => {
    try {
        const missions = await Mission.findAll();
        res.status(200).json(missions);

        
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Error retrieving missions' })
        
    }
};

const getMission = async (req, res) => {
    try {
        const { id } = req.params; 
        const mission = await Mission.findByPk(id);
        if (!mission) return res.status(404).json({ message: 'Mission not found' })
        res.status(200).json(mission);

    }
    catch (err) {
        
    }
}

const deletMission = async (req, res) => {
    try {
        const { id } = req.params;
        const mission = await Mission.findByPk(id);
        if (!mission) return res.status(404).json({ message: 'Failed to locate mission ' });
        await mission.destroy();
        
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).json({message:'Failed to delet mission'})
    }
}

const updateMission = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, launch_date, status } = req.body;
        const mission = await Mission.findByPk(id);
        if (!missions) return res.status(404).json({ message: 'Failed to find mission' });
        await Mission.update({ name, description, launch_date, status }, { where: { id: id } })
        res.status(200).json(mission);

        
    }
    catch (err) {
        res.status(500).json({message:'Failed to locate mission'})
    }
}

module.exports = {
    createMission,
    getMissions,
    getMission,
    deletMission,
    updateMission,

}