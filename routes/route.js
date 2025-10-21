const express = require('express');
const router = express.Router();

const auth = (req, res, next) => {
    console.log('Auth is done  ')
    res.user = { id: 1, role:"student" }; 
    if (res.user) {
        next();
    } 
    else {
        res.json({ success: 'false', message: 'Unauthorized' });
    }
}


const isStudent = (req, res, next) => {
    if (res.user.role === 'student') {
        next();
    }
    else {
        res.json({ success: 'false', message: 'Access denied for not being a student' });
    }
}

const isAdmin = (req, res, next) => {
    if (res.user.role === 'admin') {
        next();
    }
    else {
        res.json({ success: 'false', message: 'Access denied for not being an admin' });
    }
}

router.get('/student', auth, isStudent, (req, res)=> {
    console.log('Student access granted ');
    res.send('Welcome Student!')
});

router.get('/admin', auth, isAdmin, (req, res)=> {
    console.log('Admin access granted ');
    res.send('Welcome Admin!')
});

module.exports = router;