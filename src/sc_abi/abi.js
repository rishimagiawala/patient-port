export const PatientPortABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"patientAddress","type":"address"},{"internalType":"address","name":"primaryCare","type":"address"},{"internalType":"address","name":"PCC","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"string","name":"fromName","type":"string"},{"internalType":"string","name":"fromSpecial","type":"string"},{"internalType":"string","name":"fromEmail","type":"string"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"toName","type":"string"},{"internalType":"string","name":"toSpecial","type":"string"},{"internalType":"string","name":"toEmail","type":"string"},{"internalType":"address","name":"toContract","type":"address"}],"name":"addRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRequest","outputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"string","name":"fromName","type":"string"},{"internalType":"string","name":"fromSpecial","type":"string"},{"internalType":"string","name":"fromEmail","type":"string"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"toName","type":"string"},{"internalType":"string","name":"toSpecial","type":"string"},{"internalType":"string","name":"toEmail","type":"string"},{"internalType":"address","name":"toContract","type":"address"},{"internalType":"bool","name":"verified","type":"bool"}],"internalType":"struct PatientPort.Request","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getactiveRequestCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"primaryCareContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"primaryCareOrigin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"updateActive","outputs":[],"stateMutability":"nonpayable","type":"function"}]
