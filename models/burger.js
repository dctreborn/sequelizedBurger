module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			validate: {
				allowNull: false,
				notEmpty: true,
				len: [1, 100]
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}		
	});
	return Burger;
};

