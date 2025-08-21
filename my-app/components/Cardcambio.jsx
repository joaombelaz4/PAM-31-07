import { StyleSheet, View, Text } from 'react-native';

const CardCambio = ({ from, to, rate, amount, converted }) => {
	return (
		<View style={styles.card}>
			<View style={styles.row}>
				<Text style={styles.label}>De:</Text>
				<Text style={styles.value}>{from}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Para:</Text>
				<Text style={styles.value}>{to}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Cotação:</Text>
				<Text style={styles.value}>{rate ?? '-'}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Valor:</Text>
				<Text style={styles.value}>{amount ?? '-'}</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.label}>Convertido:</Text>
				<Text style={styles.value}>{converted ?? '-'}</Text>
			</View>
		</View>
	);
};

export default CardCambio;

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: '#fff8e1',
		padding: 12,
		marginVertical: 8,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.15,
		shadowRadius: 3,
		elevation: 3,
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 6,
	},
	label: {
		fontSize: 14,
		color: '#666',
		fontWeight: '600',
	},
	value: {
		fontSize: 16,
		color: '#222',
	},
});

