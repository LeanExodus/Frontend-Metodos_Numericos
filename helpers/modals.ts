import Swal, { SweetAlertResult } from 'sweetalert2';

let htmlContent = `<ul>
<li><b>1) Para el campo de la función se tiene que tomar en cuenta:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 Al querer multiplicar por <strong>"x"</strong> se debe ingresar el símbolo <strong>"*"</strong> antes de la <strong>"x"</strong>.<br>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una raíz cuadrada se usa <strong>"sqrt(</strong>[expresión]<strong>)"</strong>.</li>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una tangente inversa usa <strong>"atan(</strong>[expresión]<strong>)"</strong>.<br>
<li><b><br>2) Para los campos del intervalo:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 <i><b> Estos campos no son obligatorios</b></i>, ya que si no se ingresan la aplicación calculará el intervalo mediante <b>Bolzano.</b><br>
&nbsp;&nbsp;&nbsp;&#8226 Si vas a ingresarlos, procura que entre esos puntos <strong>exista</strong> una raíz, de lo contrario <strong>no se calculará.</strong></li>
<li><b><br>3) El campo de la tolerancia:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo determina el nivel de precisión requerida.<br>
&nbsp;&nbsp;&nbsp;&#8226 Se recomienda usar valores cercanos a <strong>0.</strong><br>
&nbsp;&nbsp;&nbsp;&#8226 <strong>No</strong> se admiten valores negativos.</li>
</ul>`

let htmlContentNewton =

	`<ul>
&nbsp;&nbsp;&nbsp;&#8226 En este metodo puedes usar el intervalo o el valor inicial (<i>Si ya sabes el punto medio.</i>)<br><br>
<li><b>1) Para el campo de la función se tiene que tomar en cuenta:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 Al querer multiplicar por <strong>"x"</strong> se debe ingresar el símbolo <strong>"*"</strong> antes de la <strong>"x"</strong>.<br>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una raíz cuadrada se usa <strong>"sqrt(</strong>[expresión]<strong>)"</strong>.</li>
&nbsp;&nbsp;&nbsp;&#8226 Para ingresar una tangente inversa usa <strong>"atan(</strong>[expresión]<strong>)"</strong>.<br><br>
<li><b>2) Para el campo de valor inicial:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 <i> Este campo no es obligatorio. </i><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo es dado por la suma de los puntos de intervalo divido entre 2 <strong>(<i>Punto Medio</i>).</strong><br>
&nbsp;&nbsp;&nbsp;&#8226 Usalo solo si tienes conocimiento del <strong>punto medio</strong> o si el problema te lo indica.</li><br>
<li><b>3) Para los campos del intervalo:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 <i> <strong>Estos campos no son obligatorios</strong></i>, ya que si no se ingresan la aplicación calculará el intervalo mediante <strong>Bolzano.</strong><br>
&nbsp;&nbsp;&nbsp;&#8226 Si vas a ingresarlos, procura que entre esos puntos exista una raíz, de lo contrario no se calculará.</li><br>
<li><b>4) El campo de la tolerancia:</b><br><br>
&nbsp;&nbsp;&nbsp;&#8226 Este campo determina el nivel de precisión requerida.<br>
&nbsp;&nbsp;&nbsp;&#8226 Se recomienda usar valores cercanos a <strong>0.</strong><br>
&nbsp;&nbsp;&nbsp;&#8226 <strong>No</strong> se admiten valores negativos.</li>
</ul>`

export const errorModal = (text: string) => {
	text = Array.isArray(text) ? text[0].error : text;

	Swal.fire({
		title: 'Error!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'error',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const guideModal = () => {

	Swal.fire({
		html: htmlContent,
		icon: 'info',
		width: 1000,
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const guideModalNewton = () => {

	Swal.fire({
		html: htmlContentNewton,
		icon: 'info',
		width: 1000,
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};


export const conceptModalNewton = () => {
	Swal.fire({
		width: 800,
		text:'El método de Newton-Raphson se basa en la idea de aproximar una raíz de la función mediante una secuencia de valores cada vez más cercanos al valor real de la raíz. La aproximación se mejora iterativamente utilizando la pendiente de la función en el punto actual. La pendiente de una función en un punto dado se conoce como la derivada de la función en ese punto.',
		imageUrl: 'https://i0.wp.com/static2.mbtfiles.co.uk/media/docs/newdocs/as_and_a_level/maths/core_and_pure_mathematics/908942/html/images/image05.png',
		imageWidth:'400',
		imageHeight:'200',
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
}

export const conceptModalSecant = () => {
	Swal.fire({
		width: 800,
		text:'El método de la secante es utilizada para encontrar aproximaciones de las raíces de una función real. No requiere el cálculo de la derivada, lo que lo hace más flexible y aplicable en una variedad de situaciones. Sin embargo, en algunos casos, el método de la secante puede requerir más iteraciones',
		imageUrl: 'https://brendamedina93.files.wordpress.com/2014/03/fnsionajdj.png',
		imageWidth:'500',
		imageHeight:'200',
		confirmButtonText: 'Entendido',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
}

export const successModal = (text: string) => {
	Swal.fire({
		title: 'Éxito!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'success',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const yesNoModal = async (
	text: string
): Promise<SweetAlertResult<any>> => {
	const result = Swal.fire({
		title: text,
		showCancelButton: true,
		confirmButtonText: 'Si',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
			cancelButton: 'modal-cancel-button',
		},
	});

	return result;
};


