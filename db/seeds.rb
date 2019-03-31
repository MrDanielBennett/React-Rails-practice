fruits = ['Mango', 'Pineapple', 'Passion fruit', 'Dragonfruit']

fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicous #{fruit}.")}
